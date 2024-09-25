import React from 'react';
import {Behavior, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
interface TEIProps {
    teiNode: Node,
}

export const PEnd: TBehavior = (props: TEIProps) => {
    const el = props.teiNode as Element;

    return (
        <Behavior node={props.teiNode}>
            <span className='paragraph-break'>¶</span>
            <span className="paragraph-break-reading-panel"><br/></span>
        </Behavior>
    );
}