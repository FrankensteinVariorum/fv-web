import React, { useContext } from "react";
import ReadingGroup from "./ReadingGroup";
import { VariantContext } from "../tei/variantsContext";

const Variation = () => {
    const [variant, setVariant] = useContext(VariantContext)
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