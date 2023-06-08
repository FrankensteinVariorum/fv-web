import React, {useContext, useEffect, useRef, useState} from 'react';
import {Behavior, DefaultBehaviors, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
import {Reading, SegContext, SegInfo, VariantContext} from './variantContext';
import {AutoClickComponent} from "../helpers/AutoClickSeg";

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
    const { setVariant } = useContext(VariantContext)
    const { seg, setSeg } = useContext(SegContext)
    const el = props.teiNode as Element;
    const id = el.getAttribute("xml:id");
    const chunk = id?.substring(0,3);

    const basePath = "https://raw.githubusercontent.com/PghFrankenstein/fv-data/master/variorum-chunks/"
    const targetString = `${basePath}f${props.source}_${chunk}.xml#${id}`

    const [intensityClass, setIntensityClass] = useState<string | null>(null);
    const ptr = props.spine.documentElement.querySelector(`ptr[target="${targetString}"]`)

    const clickRef = useRef(true);

    // ensure n retrieved only once when the page opens
    useEffect(() => {
        if (clickRef.current) {
            const nAttr = ptr ? ptr.closest('app').getAttribute('n') : undefined;
            const n = nAttr ? parseInt(nAttr) : undefined;
            const level = (n && n < 5) ? 1 : (n && n < 25) ? 2 : 3;
            setIntensityClass(`app-intensity-${level}`) ;
            console.log("intensity level:", level)
        }
        clickRef.current = false;
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
                        const value = await getTargetXml(r)
                        // Here we want to send the value to CETEIcean to render the XML.
                        if (value) {
                            readings.push({
                                sources: ["MS"],
                                value
                            })
                        }
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

        // Get seg id for side panel links
        const getSegId = async () => {
            console.log("seg id (seg.tsx):", (event.target as HTMLElement).id)
            return (event.target as HTMLElement).id;
        }
        const segId = await getSegId()
        setSeg({id: segId.replace(/-.*/, '')})
    }

    return (
        <Behavior node={props.teiNode}>
            <span className={intensityClass} id={id.replace(/-.*/, '')} style={{
                cursor: "pointer",
                // background: "lightgrey",
            }} onClick={handleClick}>{<TEINodes teiNodes={el.childNodes} {...props} />}</span>
        </Behavior>
    );
};