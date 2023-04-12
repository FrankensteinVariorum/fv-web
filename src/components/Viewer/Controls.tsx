import React, {useState, useLayoutEffect} from "react";
import EditionSelector from './EditionSelector';
// import OptionsSelector from './OptionsSelector';
import Paging from './Paging';

export default function Controls() {
    const [source, setSource] = useState<string|undefined>("1818")
    const [unit, setUnit] = useState<string|undefined>()

    useLayoutEffect(() => {
        const [_, s, u] = window.location.pathname.split("/")
        setSource(s)
        setUnit(u)
    })

    return <div id='viewer__controls'>
        <div>
            <EditionSelector source={source} setSource={setSource} unit={unit} />
        </div>
        <div>
            <Paging unit={unit} source={source} />
        </div>
        <!-- <OptionsSelector client:load/> -->


    </div>
}
