import React, {useEffect, useRef, useState} from "react";
import { useStore } from '@nanostores/react';
import { showState, onVariantsChanged, onAnnotationChanged, onTextChanged} from "../../data/nanostores";

export default function OptionsSelector () {
    const show = useStore(showState);
    console.log('show:', show.showVariants, show.showAnnotations, show.showText)
    // const variants = useRef([])
    // const segElements = useRef([]);
    // const pElements = useRef([]);
    //
    // const [show, setShow] = useState(() => {
    //     const storedShow = localStorage.getItem('show');
    //     return storedShow !== null ? JSON.parse(storedShow) : {
    //         ShowVariants: true,
    //         ShowAnnotations: false,
    //         ShowText: true,
    //     }});
    //
    // useEffect(() => {
    //     variants.current = [...document.querySelectorAll("span[id*='_app']")];
    //     segElements.current = [...document.querySelectorAll("tei-seg")];
    //     pElements.current = [...document.querySelectorAll("tei-p")];
    //     console.log("variants:", variants.current)
    //     console.log("seg:", segElements.current)
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('show', JSON.stringify(show));
    //     console.log(JSON.stringify(show))
    //     if (variants.current || !show[1]) {
    //         variants.current.forEach((v) => {
    //             v.classList.toggle("no-background", !show.ShowVariants);
    //         });
    //     }
    //     if (segElements.current || !show[3]) {
    //         segElements.current.forEach((s) => {
    //             s.classList.toggle("tei-cdata", !show.ShowText);
    //             s.classList.toggle("no-text", !show.ShowText);
    //         });
    //         pElements.current.forEach((p) => {
    //             p.classList.toggle("tei-cdata", !show.ShowText);
    //             p.classList.toggle("no-text", !show.ShowText);
    //         });
    //     }
    // });
    //
    //
    // const onVariantsChanged = (e) => {
    //     setShow((prevState) => ({
    //         ...prevState,
    //         ShowVariants: !prevState.ShowVariants,
    //     }));
    // }
    //
    // const onAnnotationChanged = (e) => {
    //     setShow((prevState) => ({
    //         ...prevState,
    //         ShowAnnotations: !prevState.ShowAnnotations,
    //     }));
    // }
    // const onTextChanged = (e) => {
    //     setShow((prevState) => ({
    //         ...prevState,
    //         ShowText: !prevState.ShowText,
    //     }));
    // };

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

                <label className='options-label'>
                    <input
                        name="annotation"
                        type="checkbox"
                        checked={show.showAnnotations}
                        onChange={onAnnotationChanged}/>
                    See Annotations
                </label>

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
