import React, { useState, useEffect } from "react";
import EditionSelector from './EditionSelector';
import OptionsSelector from './OptionsSelector';
import Paging from './Paging';

export default function Controls() {
    const [source, setSource] = useState<string|undefined>("MS")
    const [unit, setUnit] = useState<string|undefined>()

    useEffect(() => {
        const [_, v, s, u] = window.location.pathname.split("/")
        setSource(s)
        setUnit(u)
    },[])

    // const viewer = document.getElementById('#viewer');
    // const control = document.getElementById('#viewer__cols');
    // control ? console.log(control) : null
    // console.log(control)
    // if (!viewer) return;
    // function showTopContorls() {
    //     const viewerRect = viewer.getBoundingClientRect();
    //     const viewerTop =  viewerRect.top;
    //     if (viewerTop < -400 || !control){
    //         control[0].addClass("sticky")
    //         console.log(control[0])
    //         }
    //     // console.log('container:', containerRect.bottom, 'side panel:',sidePanelMaxHeight)
    //     }
    // // if (window.innerWidth <= 740) { // 46.25em * 16px/em = 740
    //         window.addEventListener('scroll', showTopContorls);
    // // }

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