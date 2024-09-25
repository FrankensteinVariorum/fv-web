import React, { useState, useEffect } from "react";
import EditionSelector from './EditionSelector.tsx';
import OptionsSelector from './OptionsSelector.tsx';
import Paging from './Paging.tsx';

export default function Controls() {
    const [source, setSource] = useState<string|undefined>("MS")
    const [unit, setUnit] = useState<string|undefined>()

    useEffect(() => {
        const [_, v, s, u] = window.location.pathname.split("/")
        setSource(s)
        setUnit(u)
    },[])

    return (
        <>
            <div id='viewer__controls'>
                <EditionSelector source={source} unit={unit} />
                <Paging source={source} unit={unit} />
                <OptionsSelector/>
            </div>
        </>
    );
}