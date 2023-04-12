import React from 'react';
import { Behavior } from "@astro-tei/react";
import {TEINodes} from "react-teirouter";

interface TEIProps {
    teiNode: Node,
    spine: Document
}

export const Seg: TBehavior = (props: TEIProps) => {
    const el = props.teiNode as Element;

    const handleClick = () => {
        alert(el.getAttribute("xml:id"))
    }

    return (
        <Behavior node={props.teiNode}>
            <span style={{
                cursor: "pointer",
                display: "inline-block",
                border: "1px solid grey",
            }} onClick={handleClick}>{<TEINodes teiNodes={el.childNodes} {...props} />}</span>
        </Behavior>
    );
};