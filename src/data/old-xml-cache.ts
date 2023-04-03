// This class holds a cache of XML documents, fetching them from the web if they are not there
// Every piece of code uses this, so that we can load XMLs again and again without worried about performance
//
// NOTE: The cache contains parsed Documents. If you change the document, it's going to be changed everywhere.
// This is on purpose - as we add attributes and tags for pointer resolution.

export default class XmlCache {
    private  _xmls : Map<string, Document>;  // Map from URL to a parsed XML
    private _promises: Map<string, Promise<Document>>;
    private static documentCount = 0;

    public constructor() {
        this._xmls = new Map<string, Document>();
        this._promises = new Map<string, Promise<Document>>();
    }

    public getXML(url: string): Promise<Document> {
        // This function is async, but we implement the Promises ourselves, since we also cache promises
        // This code only works because asynchronous Javascript is single threaded (note there are no locks)
        if (this._xmls.has(url)) {
            return Promise.resolve(this._xmls.get(url)!);
        }

        if (this._promises.has(url)) {
            return this._promises.get(url)!;
        }

        const promise = this.fetchXML(url);
        this._promises.set(url, promise);
        promise.then(() => {
            this._promises.delete(url);
        });
        return promise;
    }

    private parseXML(xml: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "text/xml");
    
        return doc;
    }
    
    private async fetchXML(url:string) {
        const response = await fetch(url);
        const xml = await response.text();
    
        const doc = this.parseXML(xml);
        this._xmls.set(url, doc);

        return doc
    }
}