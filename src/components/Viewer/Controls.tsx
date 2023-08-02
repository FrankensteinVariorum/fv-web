import React, { useState, useEffect } from "react";
import EditionSelector from './EditionSelector';
import OptionsSelector from './OptionsSelector';
import Paging from './Paging';
import Header from '../Header';
// import { VolProvider } from "./volContext";

export default function Controls() {
    const [source, setSource] = useState<string|undefined>("1818")
    const [unit, setUnit] = useState<string|undefined>()

    useEffect(() => {
        const [_, base, v, s, u] = window.location.pathname.split("/")
        setSource(s)
        setUnit(u)
    },[])

    return (
        <>
            <div id='viewer__controls'>
                <EditionSelector source={source} unit={unit} />
                <Paging unit={unit} source={source} />
                <OptionsSelector/>
            </div>
            <Header edition={source}/>
        </>
    );
}