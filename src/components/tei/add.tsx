import React from 'react';
import {Behavior, type TBehavior} from "@astro-tei/react";
import { TEINodes} from "react-teirouter";
interface TEIProps {
    source: string,
    unit: string,
    teiNode: Node,
}

export const Add: TBehavior = (props: TEIProps) => {
    const el = props.teiNode as Element;
    const place = el.getAttribute('place')

    return (
        <Behavior node={props.teiNode}>
            <ins>
                {
                    place == "sublinear" ?
                        <sub className='insertion'>^</sub>
                    :
                        <sup className='insertion'>^</sup>
                }
                <TEINodes teiNodes={el.childNodes} {...props} />
            </ins>
        </Behavior>
// : null
    );
}