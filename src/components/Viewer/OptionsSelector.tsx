import React, {useEffect, useState} from "react";

export default function OptionsSelector () {
    const [show, setShow] = useState({
        ShowVariants: true,
        ShowAnnotations: false,
        ShowText: true,
    });

    const onVariantsChanged = (e) => {
        setShow((prevState) => ({
            ...prevState,
            ShowVariants: !prevState.ShowVariants,
        }));
        const variants = [...document.querySelectorAll('[class^="app-intensity-"]')];
        for (const i in variants){
            variants[i].classList.toggle('no-background');
        }
    }

    const onAnnotationChanged = (e) => {
        setShow((prevState) => ({
            ...prevState,
            ShowAnnotations: !prevState.ShowAnnotations,
        }));
    }
    const onTextChanged = (e) => {
        setShow((prevState) => ({
            ...prevState,
            ShowText: !prevState.ShowText,
        }));
        const seg = [...document.getElementsByTagName("tei-seg")];
        for (const i in seg) {
            seg[i].classList.toggle("tei-cdata");
            seg[i].classList.toggle("no-text");
        }
        const p = [...document.getElementsByTagName("tei-p")];
        for (const i in p) {
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
                        checked={show.ShowVariants}
                        onChange={onVariantsChanged}/>
                    See Variants
                </label>

                <label className='options-label'>
                    <input
                        name="annotation"
                        type="checkbox"
                        checked={show.ShowAnnotations}
                        onChange={onAnnotationChanged}/>
                    See Annotations
                </label>

                <label className='options-label'>
                    <input
                        name="text"
                        type="checkbox"
                        checked={show.ShowText}
                        onChange={onTextChanged}/>
                    See Text
                </label>
            </div>
    );
}
