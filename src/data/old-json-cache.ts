// This class holds a cache of JSON documents, fetching them from the web if they are not there

export default class JsonCache {
    private  _jsons : Map<string, Object>;  // Map from URL to a parsed XML
    private _promises: Map<string, Promise<Object>>;
    private static documentCount = 0;

    public constructor() {
        this._jsons = new Map<string, Object>();
        this._promises = new Map<string, Promise<Object>>();
    }

    public getJSON(url: string): Promise<Object> {
        // This function is async, but we implement the Promises ourselves, since we also cache promises
        // This code only works because asynchronous Javascript is single threaded (note there are no locks)
        if (this._jsons.has(url)) {
            return Promise.resolve(this._jsons.get(url)!);
        }

        if (this._promises.has(url)) {
            return this._promises.get(url)!;
        }

        const promise = this.fetchJson(url);
        this._promises.set(url, promise);
        promise.then(() => {
            this._promises.delete(url);
        });
        return promise;
    }
    
    private async fetchJson(url:string) {
        const response = await fetch(url);
        let json = await response.json();

        if (json.constructor === Array) {
            json = { json }
        }

        this._jsons.set(url, json);

        return json
    }
}