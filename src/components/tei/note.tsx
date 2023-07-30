import React from 'react';
import {Behavior, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
interface TEIProps {
    teiNode: Node,
}

export const Note: TBehavior = (props: TEIProps) => {
    const el = props.teiNode as Element;
    const resp = el.getAttribute("resp");
    // const link = el.getAttribute("link");

    return (
        <Behavior node={props.teiNode}>
            <div className="note">
                {
                    <a>
                        {resp ? <span className="resp">{resp}: </span> : null}
                        <TEINodes teiNodes={el.childNodes} {...props} />
                    </a>
                }
            </div>
        </Behavior>
    );
}