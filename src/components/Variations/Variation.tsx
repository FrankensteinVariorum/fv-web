// @ts-ignore
import React, { useContext } from "react";
import ReadingGroup from "./ReadingGroup";
import { VariantContext } from "../tei/variantContext";

interface Props {
    source: string
}

const Variation = ({source}: Props) => {
    const {variant} = useContext(VariantContext)
    if (!variant) return null
    return (
        <div className="app-list">
            <hr className="app-list-to-divider"/>
            {
                variant.readings.map(g => <ReadingGroup group={g}/>)
            }
        </div>
    ) 
}

export default Variation;