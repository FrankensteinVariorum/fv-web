import React, { useContext } from 'react';
import { Behavior, DefaultBehaviors } from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
import { VariantContext } from './variantsContext';

interface TEIProps {
    teiNode: Node,
    spine: Document
    source: string
}

export const Seg: TBehavior = (props: TEIProps) => {
    const [variant, setVariant] = useContext(VariantContext)
    const el = props.teiNode as Element;
    const id = el.getAttribute("xml:id");
    const chunk = id?.substring(0,3)

    const basePath = "https://raw.githubusercontent.com/PghFrankenstein/fv-data/master/variorum-chunks/"
    const targetString = `${basePath}f${props.source}_${chunk}.xml#${id}`

    const ptr = props.spine.documentElement.querySelector(`ptr[target="${targetString}"]`)

    if (!ptr) {
        return <DefaultBehaviors.SafeUnchangedNode {...props}/>
    }

    const handleClick = () => {
        if (ptr) {
            const app = ptr.closest("app") as Element
            const rdgGrp = app.querySelectorAll("rdgGrp")
            const readings = Array.from(rdgGrp).map(rg => {
                return {
                    sources: Array.from(rg.querySelectorAll("rdg")).map(r => r.getAttribute("wit")?.replace("#f", "")),
                    value: JSON.parse(rg.getAttribute("n")
                        ?.replace(/'/g, '"')
                        .replace(/<.*?\/?>/g, " ") || '[]').join(" ")
                }
            })
            setVariant({
                readings
            })
        }
    }

    return (
        <Behavior node={props.teiNode}>
            <span style={{
                cursor: "pointer",
                background: "lightgrey",
            }} onClick={handleClick}>{<TEINodes teiNodes={el.childNodes} {...props} />}</span>
        </Behavior>
    );
};