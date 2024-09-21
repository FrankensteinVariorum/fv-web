import React from 'react';
import {Behavior, type TBehavior} from "@astro-tei/react";
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