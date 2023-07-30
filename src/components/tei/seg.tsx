import React, {useContext, useEffect, useRef, useState} from 'react';
import {Behavior, DefaultBehaviors, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
import {Reading, SegContext, VariantContext} from './variantContext';
import { useStore } from '@nanostores/react';
import {appState, showState, unitLinkState} from "../../data/nanostores";
import {sources} from "../../data/units.json"

interface TEIProps {
    teiNode: Node,
    spine: Document
    source: string
    unit:string
}

const fetchData = async (url) => {
    const response = await fetch(url)
    if (response.status === 404) {
        return null
    }   
    return await response.text()
}

export const Seg: TBehavior = (props: TEIProps) => {
    const show = useStore(showState); // nano stores
    const { setVariant } = useContext(VariantContext);
    const { seg, setSeg } = useContext(SegContext); // share which seg selected among different editions; this is for the side panel
    const el = props.teiNode as Element;
    const id = el.getAttribute("xml:id");
    const chunk = id?.substring(0,3);

    const basePath = "https://raw.githubusercontent.com/FrankensteinVariorum/fv-data/master/2023-variorum-chapters/"
    const targetString = `${basePath}f${props.source}_${props.unit}.xml#${id}`
    const [ intensityClass , setIntensityClass] = useState<string>('');
    const [ segBgClass, setSegBgClass ] = useState<string>('')
    const ptr = props.spine.documentElement.querySelector(`ptr[target="${targetString}"]`);

    // set intensity level and highlight background for seg
    useEffect(() => {
        // set intensity level
        const nAttr = ptr ? ptr.closest('app').getAttribute('n') : undefined;
        const n = nAttr ? parseInt(nAttr) : undefined;
        const level = (n && n < 10) ? 1 : (n && n < 30) ? 2 : 3;
        setIntensityClass(`app-intensity-${level}`);
        const idSelected = window.location.hash.substring(1); // Get ID from URL
        setSeg({id: idSelected})
        // set highlight background
        if (el.getAttribute("xml:id").replace(/-.*/, '') == idSelected) {
            setSegBgClass(`seg_bg--${props.source.toLowerCase()}`)
        } else {
            setSegBgClass('')
        }
    }, []);


    if (!ptr) {
        return <DefaultBehaviors.SafeUnchangedNode {...props}/>
    }

    const getTargetXml = async (reading: Element): Promise<string | null> => {
        const target = reading.querySelector("ptr")?.getAttribute("target") || ""
        const [url, id] = target.split("#")
        const xml = await fetchData(url)
        if (xml) {
            const dom = (new DOMParser).parseFromString(xml, "text/xml")
            const seg = dom.querySelector(`seg[*|id=${id}]`)
            return "Will be XML"
        }
        return null
    }

    const handleClick = async (event: React.MouseEvent<HTMLSpanElement>) => {
        const app = ptr.closest("app") as Element
        const rdgGrp = app.querySelectorAll("rdgGrp")

        const getReadings = async () => {
            const readings: Reading[] = []
            for (const rg of Array.from(rdgGrp)) {
                const n = rg.getAttribute("n")
                // const value = !n ? "" : JSON.parse(n.replace(/"/g, '\\"').replace(/'/g, '"')).join(" ")

                // // +++----------- for debug---------------+++
                // console.log("raw n:\n",n)
                // console.log("escape double quotes:\n", n?.replace(/'(?:(?!',)[^'])*'/g, match => match.replace(/"/g, '\\"')))
                //
                // console.log("replace single to double quotes:\n", n?.replace(/'(?:(?!',)[^'])*'/g, match => match.replace(/"/g, '\\"')).
                // replace(/'(?=(?:[^"]*"[^"]*")*[^"]*$)/g, '"').
                // replace(/'([^']+?)'([,\]])/g, '"\$1"\$2').
                // replace(/\['/g, '["'))
                //
                // console.log("single to double cont.:\n", n?.replace(/'(?:(?!',)[^'])*'/g, match => match.replace(/"/g, '\\"')).
                // replace(/'(?=(?:[^"]*"[^"]*")*[^"]*$)/g, '"').
                // replace(/'([^']+?)'([,\]])/g, '"\$1"\$2').
                // replace(/\['/g, '["').
                // replace(/',/g, '",').
                // replace(/, '/g, ', "'))
                //
                // console.log("unescape the double quote if it participates to wrap the token:\n", n?.replace(/'(?:(?!',)[^'])*'/g, match => match.replace(/"/g, '\\"')).
                // replace(/'(?=(?:[^"]*"[^"]*")*[^"]*$)/g, '"').
                // replace(/'([^']+?)'([,\]])/g, '"\$1"\$2').
                // replace(/\['/g, '["').
                // replace(/',/g, '",').
                // replace(/, '/g, ', "').
                // replace(/\\"(, ")/g, '"\$1'))
                // // +++----------------------------------+++

                const value = !n ? "" : JSON.parse(
                    // escape all double quotes inside single quotes
                    n.replace(/'(?:(?!',)[^'])*'/g, match => match.replace(/"/g, '\\"')).
                        // then, replace single quotes wrapping the token to double quotes for different cases
                        replace(/'(?=(?:[^"]*"[^"]*")*[^"]*$)/g, '"').
                        replace(/'([^']+?)'([,\]])/g, '"\$1"\$2').
                        replace(/\['/g, '["').
                        replace(/',/g, '",').
                        replace(/, '/g, ', "').
                        // unescape the double quote if it participates to wrap the token
                        replace(/\\"(, ")/g, '"\$1')
                ).join(" ");

                // Here we want to send the value to CETEIcean to render the XML.
                const rdgs = rg.querySelectorAll("rdg")
                let sources: string[] = []
                for (const r of rdgs) {
                    // Follow pointers to XML for MS; the rest can use @n.
                    const wit = r.getAttribute("wit") || ""
                    // if (wit === "#fMS") {
                    //     // const value = await getTargetXml(r)
                    //     // // Here we want to send the value to CETEIcean to render the XML.
                    //     // if (value) {
                    //     //     readings.push({
                    //     //         sources: ["MS"],
                    //     //         value
                    //     //     })
                    //     // }
                    // } else {
                        sources.push(wit.replace("#f", "") || "")
                    // }
                }
                if (sources.length > 0) {
                    readings.push({
                        sources,
                        value
                    })
                }
            }

            // Array.from(rdgGrp).map(rg => {
            //     let value = JSON.parse(rg.getAttribute("n")
            //         ?.replace(/'/g, '"')
            //         .replace(/<.*?\/?>/g, " ") || '[]').join(" ")
            //     let sources: string[] = []
            //     for (const r of rg.querySelectorAll("rdg")) {
            //         // Follow pointers to XML for Thomas and FV; the rest can use @n.
            //         const wit = r.getAttribute("wit") || ""
            //         if (wit === "#fThomas") {
            //             // sources.push("Thomas")
            //             const [url, id] = r.querySelector("ptr")?.getAttribute("target")?.split("#")

            //             const xml = await fetchData(url) || ""
                        // const dom = (new DOMParser).parseFromString(xml, "text/xml")
                        // const seg = Array.from(dom.getElementsByTagName("seg")).filter(e => e.getAttribute("xml:id") === id)[0]
                        // if (seg.textContent !== value) {
                        //     readings.push({
                        //         sources: ["Thomas"],
                        //         value: `will be XML ${seg.textContent}`
                        //     })
                        // } else {
                        //     sources.push("Thomas")
                        // }
            //         } else if (wit === "#fMS") {
            //             const ptr = r.querySelector("ptr")
            //             if (ptr) {
            //                 const [url, id] = r.querySelector("ptr")?.getAttribute("target")?.split("#")
            //                 // const xml = await fetchData(url) || ""
            //                 // const dom = (new DOMParser).parseFromString(xml, "text/xml")
            //                 // console.log(Array.from(dom.getElementsByTagName("seg")).filter(e => e.getAttribute("xml:id") === id))
            //                 readings.push({
            //                     sources: ["MS"],
            //                     value: `will be MS XML`
            //                 })
            //             }
            //         } else {
            //             sources.push(wit.replace("#f", "") || "")
            //         }
            //     }
            //     console.log(sources)
            //     if (sources.length > 0) {
            //         readings.push({
            //             sources,
            //             value
            //         })
            //     }
            // })

            return readings
        }

        // Only update once all data is obtained
        const readings = await getReadings()
        setVariant({ readings })

        // highlight or not highlight the specific seg element
        const toggleSegBg = (segId, setHighlight) => {
            const segElementsSelected = document.getElementsByClassName(segId);
            Array.from(segElementsSelected).forEach((node) =>
                node.classList.toggle(`seg_bg--${props.source.toLowerCase()}`, setHighlight)
            );
        };

        // not highlight the seg selected previously
        if (seg?.id) {toggleSegBg(seg?.id, false)}

        // get seg id
        let currentSegId = event.target.closest("span[class*='app']").className.split(' ')[0].replace(/-.*/, ''); // seg id used for seg background in the local page
        setSeg({id: currentSegId}) // seg if info used for side panel in other edition pages

        // highlight the seg selected
        toggleSegBg(currentSegId, true)

        const appNum = currentSegId?.split('app')[1]; // get the current app number
        appState.set(appNum) // share the app state with Edition Selector
        console.log("app:", appNum, "chunk:", currentSegId.substring(0,3))

        // set the link info for the side panel
        unitLinkState.set({
            edition: props.source,
            chunk: currentSegId.substring(0,3),
            f1818Chp: sources.find(s  => s.label === `1818`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1]+1)).id,
            f1823Chp: sources.find(s  => s.label === `1823`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1]+1)).id,
            f1831Chp: sources.find(s  => s.label === `1831`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1]+1)).id,
            fThomasChp: sources.find(s  => s.label === `Thomas`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1]+1)).id,
            fMSChp: sources.find(s  => s.label === `MS`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1]+1))?.id || ''
        });
        console.log(unitLinkState.get())
    }

    return (
        <Behavior node={props.teiNode}>
            <span
                id={id.replace(/-.*/, '')}
                // className={[id.replace(/-.*/, ''), show.showVariants ? intensityClass : '', show.showVariants ? segBgClass : ''].join(' ')}
                className={show.showVariants ? `${id.replace(/-.*/, '')} ${intensityClass} ${segBgClass}`: ''}
                style={{ cursor: "pointer"}}
                  onClick={handleClick}>
                {<TEINodes teiNodes={el.childNodes} {...props}/>}
            </span>
        </Behavior>
    );
};


