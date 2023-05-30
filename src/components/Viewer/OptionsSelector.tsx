import React, {useState} from "react";

export default function OptionsSelector () {
    const [showVariation, setShowVariation] = useState<boolean|undefined>(true)
    const [showAnnotation, setShowAnnotation] = useState<boolean|undefined>(false)
    const [showText, setShowText] = useState<boolean|undefined>(true)

    const onVariationChanged = (e) => {
        setShowVariation(!showVariation);
    }

    const onAnnotationChanged = (e) => {
        setShowAnnotation(!showAnnotation);
    }

    const onTextChanged = (e) => {
        setShowText(!showText);
        const text = [...document.getElementsByTagName("tei-seg")];
        for (let i in text) {
            text[i].classList.toggle("tei-cdata");
            text[i].classList.toggle("no-text");
        }
        const p = [...document.getElementsByTagName("tei-p")];
        for (let i in p) {
            p[i].classList.toggle("tei-cdata");
            p[i].classList.toggle("no-text");
        }
    };

    return (
    <div>
        <label className='options-label bold-choose'>CHOOSE OPTIONS</label>
        <label className='options-label'>
            <input
                name="variation"
                type="checkbox"
                checked={showVariation}
                onChange={onVariationChanged}/>
            See Variants
        </label>

        <label className='options-label'>
            <input
                name="annotation"
                type="checkbox"
                checked={showAnnotation}
                onChange={onAnnotationChanged}/>
            See Annotations
        </label>

        <label className='options-label'>
            <input
                name="text"
                type="checkbox"
                checked={showText}
                onChange={onTextChanged}/>
            See Text
        </label>
    </div>
    );
}
