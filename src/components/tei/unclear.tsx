import React from 'react';
import {Behavior, type TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
interface TEIProps {
    teiNode: Node,
}

export const Unclear: TBehavior = (props: TEIProps) => {
    const el = props.teiNode as Element;

    return (
        <Behavior node={props.teiNode}>
            <span className="unclear">
                {<TEINodes teiNodes={el.childNodes} {...props} />}
            </span>
        </Behavior>
    );
}