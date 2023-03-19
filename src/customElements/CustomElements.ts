export class CustomElements {
    // public xml: XMLDocument;
    public xmlTags: Set<string>;

    constructor(xml: XMLDocument) {
        // this.xml = xml;
        const tags = this.getTags(xml.getElementsByTagName('body')[0], []);
        this.xmlTags = new Set(tags);
        //console.debug("xmlTags=", this.xmlTags);
    }
  
    private getTags(node: Node, tags: string[]): string[] {
        if (node.hasChildNodes()) {
            const children = Array.from(node.childNodes).filter(c => c.nodeType === 1); // (no 3- #text node, new line ?)
            for (let i = 0; i < children.length; i++) { 
                this.getTags(children[i], tags);
            }
        }
        
        tags.push(node.nodeName);
        return tags;
    }

    public defineElements() {
        this.xmlTags.forEach((tag: string) => {
            customElements.define('tei-' + tag, TEICustomBaseElement, { extends: 'div' });
        });
    }
     
}


class TEICustomBaseElement extends HTMLDivElement {
    constructor() {
        super();

        // Element functionality written in here

    }
}