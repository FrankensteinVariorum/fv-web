import React, {useEffect, useRef } from "react";
import { useStore } from '@nanostores/react';
import { showState, onVariantsChanged, onTextChanged } from "../../data/nanostores";

export default function OptionsSelector () {
    const segElements = useRef([]);
    const pElements = useRef([]);
    const show = useStore(showState) // nano stores

    // get all seg and p elements when the page opens
    useEffect(() => {
        segElements.current = [...document.querySelectorAll("tei-seg")];
        pElements.current = [...document.querySelectorAll("tei-p")];
    }, []);

    // add class to hide elements if showText is false; remove if true
    useEffect(() => {
        if (segElements.current || !show[3]) {
            segElements.current.forEach((s) => {
                s.classList.toggle("tei-cdata", !show.showText);
                s.classList.toggle("no-text", !show.showText);
            });
            pElements.current.forEach((p) => {
                p.classList.toggle("tei-cdata", !show.showText);
                p.classList.toggle("no-text", !show.showText);
            });
        }
    },[show]);

    return (
            <div>
                <label className='options-label bold-choose'>CHOOSE OPTIONS</label>
                <label className='options-label'>
                    <input
                        name="variation"
                        type="checkbox"
                        checked={show.showVariants}
                        onChange={onVariantsChanged}/>
                    See Variants
                </label>

                {/*<label className='options-label'>*/}
                {/*    <input*/}
                {/*        name="annotation"*/}
                {/*        type="checkbox"*/}
                {/*        checked={show.showAnnotations}*/}
                {/*        onChange={onAnnotationChanged}/>*/}
                {/*    See Annotations*/}
                {/*</label>*/}

                <label className='options-label'>
                    <input
                        name="text"
                        type="checkbox"
                        checked={show.showText}
                        onChange={onTextChanged}/>
                    See Text
                </label>
            </div>
    );
}
