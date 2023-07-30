import React from 'react';
import {Behavior, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
interface TEIProps {
    teiNode: Node,
}

export const Add: TBehavior = (props: TEIProps) => {
    const el = props.teiNode as Element;



    return (
        // (el.childNodes.length !== 1 && el.childNodes[0].nodeName !== 'metamark') ?
        <Behavior node={props.teiNode}>
            <ins>
                <span className='insertion'>^</span>
                    <TEINodes teiNodes={el.childNodes} {...props} />
            </ins>
        </Behavior>
// : null
    );
}