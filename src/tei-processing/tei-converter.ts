/* This file contains a class that takes the TEI and converts it into a React tree */

import React, { ReactNode } from 'react';
import TeiReactElement from '../components/tei/TeiReactElement';
import TeiReactText from '../components/tei/TeiReactText';
import { Chunk, Edition } from '../data/edition';
import TeiAppWrapper from '../components/tei/TeiAppWrapper';
import TeiAnnotationWrapper from '../components/tei/TeiAnnotationWrapper';
import { Apparatus } from '../data/spine';

export class TeiConverter {
    private static index = 0;

    constructor(private showVariations: boolean, private showAnnotations: boolean, private showText: boolean, private edition?: Edition, private chunk?: Chunk) {
    }

    private getHtmlTag(teiTag: string) {
        if (teiTag === 'p') {
            return 'p';
        } else if (teiTag === 'head') {
            return 'h3';
        } else if (teiTag === 'ab') {
            return 'p';
        }

        return undefined;
    }

    private buildProperties(node: Node): any {
        const nodeAttributes = (node as any).attributes;
        const valueProps: any = {};

        for (var i = 0; i < nodeAttributes.length; i++) {
            let name = nodeAttributes[i].nodeName;
            if (name === 'xml:id') {
                name = 'id';
            }
            valueProps[name] = nodeAttributes[i].nodeValue;
        }

        return valueProps;
    }

    public teiToReactElement(node: Node, onAppClick?: (app: Apparatus) => void, onAnnotationClick?: (annotations: Array<Object>) => void): ReactNode {  // Returns a single React element
        const reactChildren: ReactNode[] = [];
        // create elements for all children
        if (node.hasChildNodes()) {
            for (let i = 0; i < node.childNodes.length; i++) {
                const childNode = node.childNodes[i];
                let childElement: ReactNode = undefined;
                if (childNode.nodeType === 1) {
                    childElement = this.teiToReactElement(childNode, onAppClick, onAnnotationClick);
                } else if (childNode.nodeType === 3) {
                    let text = childNode.textContent || '';
                    text = text.trim();
                    if (text) {
                        childElement = React.createElement(TeiReactText, {
                            text: childNode.textContent || '',
                            showText: this.showText,
                            showVariations: this.showVariations,
                            showAnnotations: this.showAnnotations,
                            key: TeiConverter.index++,
                        });
                    }
                } else {
                    console.warn('Child node of unrecognizezd type: ', childNode);
                }

                if (childElement) {
                    reactChildren.push(childElement);
                }
            }
        }

        // build properties
        const teiProps = this.buildProperties(node);

        // return create react element
        var props: any = {
            tag: node.nodeName,
            key: TeiConverter.index++,
            htmlTag: this.getHtmlTag(node.nodeName),
            showText: this.showText,
            showVariations: this.showVariations,
            showAnnotations: this.showAnnotations,
            teiProps: teiProps,
        };

        let reactElement: ReactNode = React.createElement(TeiReactElement, props, reactChildren); // Pass children

        if (this.chunk && this.showVariations && teiProps['app-ref']) {
            const app = this.chunk.getApp(teiProps['app-ref']);
            const firstInApp = teiProps['first-in-app'] === 'true';

            // We have an <app> to wrap around the element
            reactElement = React.createElement(TeiAppWrapper, {
                key: TeiConverter.index++,
                showVariations: this.showVariations,
                showText: this.showText,
                edition: this.edition,
                onAppClick,
                app, firstInApp},
            [reactElement])
        }

        if (this.chunk && this.showAnnotations && teiProps['annotatedBy']) {
            // There may be multiple annotations targeting this element
            const annotations: Array<Object> = teiProps["annotatedBy"].split(" ").map((target) => {
                return this.chunk!.annotation!.getAnnotation(target)
            })
            reactElement = React.createElement(TeiAnnotationWrapper, {
                key: TeiConverter.index++,
                showAnnotations: this.showAnnotations,
                onAnnotationClick,
                annotations},
            [reactElement])
        }

        return reactElement;
    }
}
