import React from 'react';
import {Behavior, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
interface TEIProps {
    teiNode: Node,
}

export const Del: TBehavior = (props: TEIProps) => {
    const el = props.teiNode as Element;

    return (
        <Behavior node={props.teiNode}>
            <del>
                {<TEINodes teiNodes={el.childNodes} {...props} />}
            </del>
        </Behavior>
    );
}