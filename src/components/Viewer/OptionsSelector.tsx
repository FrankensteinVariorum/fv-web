import React, {useEffect, useRef } from "react";
import { useStore } from '@nanostores/react';
import { showState, onVariantsChanged, onTextChanged, onNoteChanged } from "../../data/nanostores.ts";

export default function OptionsSelector () {
    const textElements = useRef([]);
    const show = useStore(showState) // nano stores

    // get all tei-text elements when the page opens
    useEffect(() => {
        textElements.current = [...document.querySelectorAll("tei-text")];
    }, []);

    // add class to hide elements if showText is false; remove if true
    useEffect(() => {
        if (textElements.current || !show[3]) {
            textElements.current.forEach((t) => {
                t.classList.toggle("no-text", !show.showText);
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

                <label className='options-label'>
                    <input
                        name="text"
                        type="checkbox"
                        checked={show.showText}
                        onChange={onTextChanged}/>
                    See Text
                </label>

                <label className='options-label'>
                    <input
                        name="note"
                        type="checkbox"
                        checked={show.showNote}
                        onChange={onNoteChanged}/>
                    See Note
                </label>
            </div>
    );
}
