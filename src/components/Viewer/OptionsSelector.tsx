import React, {useEffect, useRef, useState} from "react";
import { useStore } from '@nanostores/react';
import { showState, onVariantsChanged, onAnnotationChanged, onTextChanged} from "../../data/nanostores";

export default function OptionsSelector () {
    const segElements = useRef([]);
    const pElements = useRef([]);
    const show = useStore(showState)
    // localStorage.setItem('show', JSON.stringify(show));
    // const storedShow = localStorage.getItem('show');

    // const show = storedShow !== null ? JSON.parse(storedShow) : useStore(showState)
    // console.log('show:', show.showVariants, show.showAnnotations, show.showText)

    // const [show, setShow] = useState(() => {
    //     const storedShow = localStorage.getItem('show');
    //     return storedShow !== null ? JSON.parse(storedShow) : {
    //         ShowVariants: true,
    //         ShowAnnotations: false,
    //         ShowText: true,
    //     }});
    //
    useEffect(() => {
        segElements.current = [...document.querySelectorAll("tei-seg")];
        pElements.current = [...document.querySelectorAll("tei-p")];
    }, []);
    //
    useEffect(() => {
        // console.log(JSON.stringify(show))
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
