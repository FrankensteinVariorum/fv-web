import React, {useContext, useEffect, useRef, useState} from 'react';
import {Behavior, DefaultBehaviors, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
import {Reading, SegContext, VariantContext} from './variantContext';
import { useStore } from '@nanostores/react';
import { showState } from "../../data/nanostores";

interface TEIProps {
    teiNode: Node,
    spine: Document
    source: string
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
    const [previousSegID, setPreviousSegID] = useState<any>(); // previous seg selected needs to be reset the bg color when clicking on another seg
    const { setVariant } = useContext(VariantContext);
    const { seg, setSeg } = useContext(SegContext); // share which seg selected among different editions; this is for the side panel

    const el = props.teiNode as Element;
    const id = el.getAttribute("xml:id");
    const chunk = id?.substring(0,3);

    const basePath = "https://raw.githubusercontent.com/FrankensteinVariorum/fv-data/master/2023-variorum-chunks/"
    const targetString = `${basePath}f${props.source}_${chunk}.xml#${id}`
    const [ intensityClass , setIntensityClass] = useState<string|null>(null);
    const ptr = props.spine.documentElement.querySelector(`ptr[target="${targetString}"]`);
    const clickRef = useRef(true); // ensure n retrieved only once when the page opens and not repeatedly during re-renders

    // set the intensity level
    useEffect(() => {
        if (clickRef.current) {
            const nAttr = ptr ? ptr.closest('app').getAttribute('n') : undefined;
            const n = nAttr ? parseInt(nAttr) : undefined;
            const level = (n && n < 5) ? 1 : (n && n < 25) ? 2 : 3;
            setIntensityClass(`app-intensity-${level}`) ;
            const fragmentIdentifier = window.location.hash; // Get ID from URL
            const id = fragmentIdentifier.substring(1); // Remove the '#' symbol
            setSeg({id: id})
        }
        clickRef.current = false;
    }, []);
    // highlight the seg selected when the page opens if necessary
    // useEffect(() => {
    //     const fragmentIdentifier = window.location.hash; // Get ID from URL
    //     if (fragmentIdentifier) {
    //         const id = fragmentIdentifier.substring(1); // Remove the '#' symbol
    //         const source = window.location.pathname.split('/')[2]; // Get edition source from URL
    //         const span = document.getElementById(id);
    //         span.classList.toggle(`seg_bg--${source.toLowerCase()}`, true)
    //     }
    // }, [])
    // not highlight the seg selected previously
    useEffect(() => {
        if (previousSegID) {
            const previousSegElement = document.getElementById(previousSegID);
            if (previousSegElement) {
                previousSegElement.classList.remove(`seg_bg--${props.source.toLowerCase()}`);
            }
        }
    }, [previousSegID]);

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
                let value = JSON.parse(rg.getAttribute("n")
                    ?.replace(/'/g, '"')
                    || '[]').join(" ")

                // Here we want to send the value to CETEIcean to render the XML.
                const rdgs = rg.querySelectorAll("rdg")
                let sources: string[] = []
                for (const r of rdgs) {
                    // Follow pointers to XML for MS; the rest can use @n.
                    const wit = r.getAttribute("wit") || ""
                    if (wit === "#fMS") {
                        // const value = await getTargetXml(r)
                        // // Here we want to send the value to CETEIcean to render the XML.
                        // if (value) {
                        //     readings.push({
                        //         sources: ["MS"],
                        //         value
                        //     })
                        // }
                    } else {
                        sources.push(wit.replace("#f", "") || "")
                    }
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

        const toggleSegBg = (segId, setColor) => {
            const segElementSelected = document.getElementById(`${segId}`)
            segElementSelected.classList.toggle(`seg_bg--${props.source.toLowerCase()}`, setColor)
        }

        // Get seg id for side panel links
        setPreviousSegID(seg.id) // store the previous seg id


        let currentSegId = (event.target as HTMLElement).id.replace(/-.*/, '');// for seg background in the local page
        setSeg({id: currentSegId}) // for side panel in different edition pages
        toggleSegBg(currentSegId, true) // highlight the seg selected
    }

    return (
        <Behavior node={props.teiNode}>
            <span className={show.showVariants ? intensityClass : undefined}
                  id={id.replace(/-.*/, '')}
                  style={{ cursor: "pointer"}}
                  onClick={handleClick}>
                {<TEINodes teiNodes={el.childNodes} {...props} />}
            </span>
        </Behavior>
    );
};