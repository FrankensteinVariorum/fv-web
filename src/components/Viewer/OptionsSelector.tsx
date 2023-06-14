import React, {useEffect, useRef, useContext} from "react";
import {ShowContext} from "./showContext";

export default function OptionsSelector () {
    const variants = useRef([])
    const segElements = useRef([]);
    const pElements = useRef([]);
    const { show, setShow } = useContext(ShowContext);
    useEffect(() => {
        variants.current = [...document.querySelectorAll("span[id*='_app']")];
        segElements.current = [...document.querySelectorAll("tei-seg")];
        pElements.current = [...document.querySelectorAll("tei-p")];
        console.log("variants:", variants.current)
        console.log("seg:", segElements.current)
    }, []);

    useEffect(() => {
        console.log("showVariants:",show)

        localStorage.setItem('show', JSON.stringify(show));
        console.log(JSON.stringify(show))
        if (variants.current || !show[1]) {
            variants.current.forEach((v) => {
                v.classList.toggle("no-background", !show.ShowVariants);
            });
        }
        if (segElements.current || !show[3]) {
            segElements.current.forEach((s) => {
                s.classList.toggle("tei-cdata", !show.ShowText);
                s.classList.toggle("no-text", !show.ShowText);
            });
            pElements.current.forEach((p) => {
                p.classList.toggle("tei-cdata", !show.ShowText);
                p.classList.toggle("no-text", !show.ShowText);
            });
        }
    });

    const onVariantsChanged = (e) => {
        setShow((prevState) => ({
            ...prevState,
            ShowVariants: !prevState.ShowVariants,
        }));
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
