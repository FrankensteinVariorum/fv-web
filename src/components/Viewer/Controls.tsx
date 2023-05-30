import React, {useState, useLayoutEffect, useEffect, createContext} from "react";
import EditionSelector from './EditionSelector';
import OptionsSelector from './OptionsSelector';
import Paging from './Paging';
import Header from '../Header';

export const ShowContext = React.createContext();
export default function Controls() {
    const [source, setSource] = useState<string|undefined>("1818")
    const [unit, setUnit] = useState<string|undefined>()

    // const [showVariation, setShowVariation] = useState<boolean|undefined>(true)
    // const [showAnnotation, setShowAnnotation] = useState<boolean|undefined>(false)
    // const [showText, setShowText] = useState<boolean|undefined>(true)

    useLayoutEffect(() => {
        const [_, v, s, u] = window.location.pathname.split("/")
        setSource(s)
        setUnit(u)
    })


    // useEffect(() => {
    //     const savedShowText = localStorage.getItem("showText");
    //     const savedShowAnnotation = localStorage.getItem("showAnnotation");
    //     const savedShowVariation = localStorage.getItem("showVariation");
    //
    //     if (savedShowText !== null) {
    //         setShowText(savedShowText === "true");
    //     }
    //
    //     if (savedShowAnnotation !== null) {
    //         setShowAnnotation(savedShowAnnotation === "true");
    //     }
    //
    //     if (savedShowVariation !== null) {
    //         setShowVariation(savedShowVariation === "true");
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem("showText", showText.toString());
    //     localStorage.setItem("showAnnotation", showAnnotation.toString());
    //     localStorage.setItem("showVariation", showVariation.toString());
    // }, [showText, showAnnotation, showVariation]);


    return (
        <>
            <div id='viewer__controls'>
                <EditionSelector source={source} unit={unit} />
                <Paging unit={unit} source={source} />

                {/*<ShowContext.Provider*/}
                {/*    value={{*/}
                {/*        showText,*/}
                {/*        showAnnotation,*/}
                {/*        showVariation,*/}
                {/*        setShowText,*/}
                {/*        setShowAnnotation,*/}
                {/*        setShowVariation}}>*/}
                    <OptionsSelector/>
                {/*</ShowContext.Provider>*/}
            </div>
            <Header edition={source}/>
        </>
    );
}
