import FvStore from "./old-store";
import { Spine } from "./spine";
import { Annotation } from "./old-annotation";
import { evaluateXPath } from "../tei-processing/helpers";

export abstract class Edition {
    public readonly code: string = ''; // 1818, 1823, 1831, Thomas, MS
    public readonly name: string = '';
    public readonly chunks: number[] = [];

    constructor(code: string, name: string, chunks: number[]) {
        this.code = code;
        this.name = name;
        this.chunks = chunks;
    }

    protected getChunkUrl(chunkId: number) {
        const chunkStr = chunkId < 10 ? `0${chunkId}` : `${chunkId}`;
        const url = `https://raw.githubusercontent.com/PghFrankenstein/fv-data/master/variorum-chunks/f${this.code}_C${chunkStr}.xml`;

        return url;
    }

    public async getXML(chunkId: number) {
        return await FvStore.cache.getXML(this.getChunkUrl(chunkId));
    }

    public abstract getMainRootElements(document: Document): Element[];
    public getMarginRootElements(document: Document): Element[] {
        return []; // The default behavior is no margins
    }
}

export class EditionWithBody extends Edition {
    public getMainRootElements(document: Document): Element[] {
        try {
            return [document.getElementsByTagName('body')[0]];
        } catch(err) {
            console.error(`Can't located body element of ${this.code}: ${err}`);
            throw new Error("Can't locate body element");
        }
    }
} 

export class MSEdition extends Edition { 
    public getMainRootElements(document: Document): Element[] {
        const xpath = "//tei:zone[@type='main']";
        const nodes = evaluateXPath(document, xpath);
        return nodes.map((n) => n as Element);
    }

    public getMarginRootElements(document: Document): Element[] {
        const xpath = "//tei:zone[@type='left_margin']";
        const nodes = evaluateXPath(document, xpath);
        return nodes.map((n) => n as Element);
    }
}


export class Chunk {
    public readonly edition: Edition;
    public readonly chunkNumber: number;
    public readonly tei: Document;
    public readonly mainRoots: Element[];
    public readonly marginRoots: Element[];
    public readonly variations: Spine;
    public readonly annotation: Annotation | undefined;

    private constructor(edition: Edition, chunkNumber: number, tei: Document, spine: Spine, annotation: Annotation | undefined) {
        this.edition = edition;
        this.chunkNumber = chunkNumber;
        this.tei = tei;
        this.variations = spine;
        this.annotation = annotation;
        this.mainRoots = edition.getMainRootElements(tei);
        this.marginRoots = edition.getMarginRootElements(tei);
    }

    public static async load(edition: Edition, chunkNumber: number): Promise<Chunk> {
        const document = await edition.getXML(chunkNumber);
        const spine = await FvStore.getSpine(chunkNumber);
        await spine.initialize();

        // Only initialize annotations for all printed editions (not the MS).
        let annotation
        if (edition.code !== 'MS') {
            annotation = await FvStore.getAnnotation(edition.code, chunkNumber);
            await annotation.initialize();
        }       

        const chunk = new Chunk(edition, chunkNumber, document, spine, annotation);
        // chunk.addAppReferences();

        return chunk;
    }

    public getApp(appRef: string) {
        const app = this.variations.apps.find((a) => a.id === appRef);
        if(!app) {
            throw new Error(`Can't locate app ${appRef}`);
        }
        return app;
    }
}
