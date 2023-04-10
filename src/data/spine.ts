import FvStore from "./old-store";
import { Edition } from "./old-edition";
import { evaluateXPath, findElementByXmlId } from "../tei-processing/helpers";

interface PointerData {
    ptrElement: Element;
    groupId: string;
    edition: Edition;
    referencedUrl: string;
    referencedTarget: string;

    dereferenced?: Element;
}

// async function debug1818(where: string) {
//     const xml = await FvStore.getEdition('1818').getXML(1);
//     console.debug(`1818 ${where}:`)
//     console.debug(xml.documentElement.outerHTML);
// }

export class ReadingGroup {
    public readonly groupId: string;
    public readonly editions: Edition[];
    public readonly apparatus: Apparatus;
    public readonly element?: Element;

    private readonly pointers: PointerData[];

    constructor(apparatus: Apparatus, private grpElement: Element) {
        this.groupId = grpElement.getAttribute('xml:id')!;
        this.apparatus = apparatus;
        this.editions = this.fillEditions();
        this.pointers = this.fillPointers();
        this.element = this.buildElement();
    }

    private fillEditions() {
        const rdgElements = Array.from(this.grpElement.getElementsByTagName('rdg'));
        const editionCodes = rdgElements.map((rdg) => rdg.getAttribute('wit')!.substr(2)); // <rdg wit="#fMS">
        const editions = editionCodes.map((ec) => FvStore.editions.find((ed) => ed.code === ec)!);

        return editions;
    }

    private fillPointers() {
        // Fill pointers for one of the editions in the group, as they are all identical
        const edition = this.editions[0];
        return this.apparatus.pointers.filter((ptr) => ptr.groupId === this.groupId && ptr.edition === edition);
    }

    private buildElement() {
        // Build a new XML element that contains all the dereferenced pointers in this group
        // We create a new document for each such element
        if (this.pointers.length === 0) {
            return undefined;
        }

        const doc = document.implementation.createDocument(null, null, null);
        const group = doc.createElement('rdgGrp');
        const children = this.pointers.map((ptr) => ptr.dereferenced!);
        for(const child of children) {
            const clone = child.cloneNode(true);  // We must clone the node, otherwise it's detached from the original XML
            group.appendChild(clone);
        }
        doc.appendChild(group);

        return group;
    }
}

export class Apparatus {  // Content of the <app> tag
    public readonly id: string;
    public readonly n: number | undefined;
    public readonly element: Element;

    public pointers: PointerData[];
    private _groups: ReadingGroup[];

    constructor(element: Element) {
        this.element = element;

        const idAttr = element.attributes.getNamedItem('xml:id')
        if (!idAttr) {
            throw new Error('<app> tag with no xml:id');
        }
        this.id = idAttr.value;

        const nAttr = element.attributes.getNamedItem('n');
        this.n = nAttr ? parseInt(nAttr.value) : undefined;

        this.pointers = this.parsePointers();
        this._groups = [];
    }

    public get groups() { return this._groups; }

    public buildGroups() {
        const groupElements = Array.from(this.element.getElementsByTagName('rdgGrp'));
        // const groupSet = new Set<string>(this.pointers.map((ptr) => ptr.groupId));
        this._groups = Array.from(groupElements).map((grp) => new ReadingGroup(this, grp));
    }

    private parsePointers() {
        const ptrElements = Array.from(this.element.getElementsByTagName('ptr'));
        const ptrs = ptrElements.map((el) => this.parsePointer(el));

        return ptrs;
    }

    private parsePointer(ptrElement: Element): PointerData {
        const rdgElement = ptrElement.parentNode as Element;
        if (!rdgElement || rdgElement.tagName !== 'rdg') {
            throw new Error(`Parent of <ptr> is not <rdg>`);
        }
        const witAttr = rdgElement.attributes.getNamedItem('wit');
        if (!witAttr) {
            throw new Error('<rdg> element does not have a wit attribute');
        }
        const editionCode = witAttr.value.substr(2);  // with is #f1818, #fMS etc...
        let edition: Edition;
        try {
            edition = FvStore.getEdition(editionCode);
        } catch(err) {
            throw new Error(`<rdg> has invalid witness ${witAttr.value}`);
        }

        const rdgGroupElement = rdgElement.parentNode as Element;
        if(!rdgGroupElement || rdgGroupElement.tagName !== 'rdgGrp') {
            throw new Error(`Parent of <rdg> element is not <rdgGrp>`);
        }
        const grpIdAttr = rdgGroupElement.attributes.getNamedItem('xml:id');
        if (!grpIdAttr) {
            throw new Error('<rdrGrp> has no xml:id');
        }
        const groupId = grpIdAttr.value;

        const targetAttr = ptrElement.attributes.getNamedItem('target');
        if (!targetAttr) {
            throw new Error(`<ptr> element has not target attribute`);
        }

        const parts = targetAttr.value.split('#')
        if (parts.length !== 2) {
            throw new Error(`Target ${targetAttr.value} is not well formatted. Expected uri#xpath`);
        }

        return {
            ptrElement,
            edition,
            groupId,
            referencedUrl: parts[0],
            referencedTarget: parts[1],
        };
    }

    public getOtherGroups(ed: Edition) {
        // Returns all the groups besides the one that holds this edition
        return this.groups.filter((grp) => grp.editions.indexOf(ed) === -1);
    }
}

interface StringRange {
    xpath: string,
    start: number,
    length: number,
}


export class Spine {
    public readonly chunkNumber: number;
    private _apps: Apparatus[] | undefined;
    private _xml: Document | undefined;
    private _initialized = false;
    private _initializationPromise?: Promise<void>;
    private static mockElementCount = 0;
    
    constructor(chunk: number) {
        this.chunkNumber = chunk
    }

    public initialize(): Promise<void> {
        // Initialize may be called several times before the first initialization complete.
        // We make sure initialization runs only once
        if(this._initializationPromise) {
            return this._initializationPromise;
        }

        this._initializationPromise = this.innerInitialize();
        this._initializationPromise.then(() => {
            this._initializationPromise = undefined;
        })
        return this._initializationPromise;
    }

    private async innerInitialize() {
        if(this._initialized) {
            return;
        }

        this._xml = await this.getXML();

        await this.parseApps();
        await this.fetchAllReferences();
        await this.rewriteStringRanges();
        await this.dereferencePointers();
        this.addBackPointers();
        this.buildGroupsInApps();
        
        this._initialized = true;
    }

    private async getXML() {
        const chunkStr = this.chunkNumber < 10 ? `0${this.chunkNumber}` : `${this.chunkNumber}`;
        const url = `https://raw.githubusercontent.com/PghFrankenstein/fv-data/master/standoff_Spine/spine_C${chunkStr}.xml`

        const document = await FvStore.cache.getXML(url);
        return document;
    }

    private async parseApps() {
        if(!this._xml) {
            throw new Error('parseApps called before getXML, which makes no sense')
        }

        const appElements = Array.from(this._xml.getElementsByTagName('app'));
        const apps = appElements.map((app) => new Apparatus(app));
        this._apps = apps;
    }

    public get apps(): Apparatus[] {
        if (!this._apps) {
            throw new Error(`Spine not initialized yet`);
        }
        return this._apps;
    }

    // Download all referenced XMLs concurrently (if they're not cached)
    private async fetchAllReferences() {
        let allUrls = [] as string[];

        for(let app of this.apps) {
            const urls = app.pointers.map((ptr) => ptr.referencedUrl);
            allUrls = allUrls.concat(urls);
        }

        const unique = Array.from(new Set<string>(allUrls));
        const promises = unique.map((url) => FvStore.cache.getXML(url));
        await Promise.all(promises);  // Returns only once all URLs have been fetched
    }

    // Rewrite string ranges to ordinary pointers. 
    // This is done by adding tags in the target XML with their own ID surrounding the relevant text elements

    private async rewriteStringRanges() {
        const re = /^string-range\((?<xpath>.+),(?<start>\d+),(?<length>\d+)\)$/;
        
        for(let app of this.apps) {
            const invalidPointers = new Set<PointerData>();
            for(let ptr of app.pointers) {
                const match = ptr.referencedTarget.match(re);
                if (match) {
                    const stringRange = {
                        xpath: match.groups!.xpath,
                        start: parseInt(match.groups!.start),
                        length: parseInt(match.groups!.length),
                    };
                    try {
                        await this.rewriteStringRange(ptr, stringRange);
                    } catch(err) {
                        invalidPointers.add(ptr);
                    }
                }
            }

            const validPointers = app.pointers.filter((ptr) => !invalidPointers.has(ptr));
            app.pointers = validPointers;
        }
    }

    private async rewriteStringRange(ptr: PointerData, range: StringRange) {
        // For now - just get the xml:id of the target element and replace the pointer's target.
        // Add an xml:id if none exists on the target element
        const targetDoc = await FvStore.cache.getXML(ptr.referencedUrl);
        const targetNodes = evaluateXPath(targetDoc, range.xpath);

        if (targetNodes.length === 0) {
            console.error(`string-range for xpath ${range.xpath} failed to return a node`);
            throw Error('string-range returned no nodes');
        }

        if (targetNodes.length > 1) {
            console.error(`string-range for xpath ${range.xpath} returned more than one node`);
            throw Error('string-range returned more than one node');
        }

        const targetElement = targetNodes[0] as Element;
        const idAttr = targetElement.attributes.getNamedItem('xml:id');
        const mockIdAttr = targetElement.attributes.getNamedItem('mock-id');
        let xmlId = '';
        if (idAttr) {
            xmlId = idAttr.value;
        } else if(mockIdAttr) {
            xmlId = mockIdAttr.value;
        } else {
            xmlId = `mock-id-${Spine.mockElementCount}`;
            Spine.mockElementCount += 1;

            // Adding xml:id to an existing document doesn't work fully - XPath doesn't find it
            // unless the document is completely reparsed. So we add our own mock-id attribute instead
            targetElement.setAttribute('mock-id', xmlId);
        }

        // Update the Pointer
        ptr.referencedTarget = xmlId;  // In memory
        ptr.ptrElement.setAttribute('target', `${ptr.referencedUrl}#${xmlId}`);
    }

    private async dereferencePointers() {
        for(let app of this.apps) {
            const invalidPointers = new Set<PointerData>();

            for(let ptr of app.pointers) {
                const document = await FvStore.cache.getXML(ptr.referencedUrl);
                try {
                    const element = findElementByXmlId(document, ptr.referencedTarget);
                    ptr.dereferenced = element;
                } catch(err) {
                    console.error(`Pointer ${ptr.ptrElement.outerHTML} is invalid`);
                    invalidPointers.add(ptr);
                }
            }

            const validPointers = app.pointers.filter((ptr) => !invalidPointers.has(ptr));
            app.pointers = validPointers
        }
    }

    private addBackPointers() {
        // We will add the back pointers to all editions while we're at it
        // Backpointers are an attribute - app-ref, which contains the id of the app element
        for(let app of this.apps) {
            const visitedApp = new Set<string>();
            for(let ptr of app.pointers) {
                if (!ptr.dereferenced) {
                    console.error('Non dereferenced pointed in addBackPointers - pointers should all be dereferenced by now');
                    continue;
                }
                const firstInApp = !visitedApp.has(ptr.referencedUrl);
                ptr.dereferenced!.setAttribute('app-ref', app.id);
                ptr.dereferenced!.setAttribute('first-in-app', firstInApp ? 'true' : 'false');
                // console.log(ptr.dereferenced!.outerHTML);
                visitedApp.add(ptr.referencedUrl);
            }
        }
    }

    private buildGroupsInApps() {
        // Build the groups in all App objects
        for(const app of this.apps) {
            app.buildGroups();
        }
    }
}
