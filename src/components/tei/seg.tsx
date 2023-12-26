import React, {useContext, useEffect, useRef, useState} from 'react';
import {Behavior, DefaultBehaviors, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
import {MSTargetContext, Reading, SegContext, ThomasThumbnailContext, VariantContext} from './variantContext';
import { useStore } from '@nanostores/react';
import {appState, showState, unitLinkState} from "../../data/nanostores";
import {sources} from "../../data/units.json";
import linkData from "../../data/thumbnails.json";

// read variorum data from spine files, set intensity level of variants, set seg selected highlighted, define side panel links, and set external links for MS and Thomas
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
    const { setMSTarget } = useContext(MSTargetContext);
    const { setThomasThumbnail} = useContext(ThomasThumbnailContext)

    const el = props.teiNode as Element;
    const id = el.getAttribute("xml:id");
    const chunk = id?.substring(0,3);

    const basePath = "https://raw.githubusercontent.com/FrankensteinVariorum/fv-data/master/2023-variorum-chapters/"
    const targetString = `${basePath}f${props.source}_${props.unit}.xml#${id}`
    const [ intensityClass , setIntensityClass] = useState<string>('');
    const [ segBgClass, setSegBgClass ] = useState<string>('')
    const ptr = props.spine.documentElement.querySelector(`rdg>ptr[target="${targetString}"]`);

    // set intensity level and highlight background for seg when the page opens
    useEffect(() => {
        // set intensity level
        const nAttr = ptr ? ptr.closest('app').getAttribute('n') : undefined;
        const n = nAttr ? parseInt(nAttr) : undefined;
        // set the intensity level of hotspots
        const level = (n && n <= 1) ? 0 : (n <= 11) ? 1 : (n && n <= 30) ? 2 : 3;
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


    // a function to highlight or not highlight the specific seg element
    // input: the id of seg to process and message whether highlight or not highlight
    const toggleSegBg = (segId, setHighlight) => {
        const segElementsSelected = document.getElementsByClassName(segId);
        // @ts-ignore
        Array.from(segElementsSelected).forEach((node) =>
            node.classList.toggle(`seg_bg--${props.source.toLowerCase()}`, setHighlight)
        );
    };

    // when show variants, the seg selected previously is highlighted
    useEffect(() => {
        if (show.showVariants) {
            toggleSegBg(seg?.id, true);
        }
    }, [show.showVariants]);

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
        // close the side panel when hide variants
        if (!show.showVariants) {
            setVariant(null);
            setSeg(null);
            return
        }

        const app = ptr.closest("app") as Element
        const rdgGrp = app.querySelectorAll("rdgGrp")

        const getReadings = async () => {
            const readings: Reading[] = []
            for (const rg of Array.from(rdgGrp)) {
                const n = rg.getAttribute("n")

                // // +++----- for debugging -----+++
                // console.log(n)
                // console.log(n?.replace(/%q%/g, '\\"').replace(/([\[\]\s,])'/g, '$1"').replace(/'([\[\]\s<>,])/g, '"$1'))

                const value = !n ? "" : JSON.parse(n.replace(/%q%/g, '\\"').
                replace(/([\[\]\s,])'/g, '$1"').
                replace(/'([\[\]\s<>,])/g, '"$1')).join(" ")

                // Here we want to send the value to CETEIcean to render the XML.
                const rdgs = rg.querySelectorAll("rdg")
                let sources: string[] = []
                rdgs.forEach(r => {
                    // Follow pointers to XML for MS; the rest can use @n.
                    const wit = r.getAttribute("wit") || ""
                    sources.push(wit.replace("#f", "") || "")
                })
                if (sources.length > 0) {
                    readings.push({
                        sources,
                        value
                    })
                }
            }
            return readings
        }

        // get the seg id used for seg background in the current page
        let currentSegId = event.target.closest("span[class*='app']")?.className.split(' ')[0].replace(/-.*/, '');
        console.log("current id:", currentSegId);
        console.log("seg.id", seg?.id);
        if (seg?.id != currentSegId) {
        // Only update once all data is obtained
            const readings = await getReadings()
            setVariant({ readings })
        } else {
            setVariant(null)
        }

        // not highlight the seg which is selected previously
        // not highlight the seg which is highlighted already and is selected again
        if (seg?.id) {toggleSegBg(seg?.id, false)}
        let appNum
        if (seg?.id != currentSegId) {
            setSeg({id: currentSegId}) // seg id info used for side panel in other edition pages
            // highlight the seg selected
            toggleSegBg(currentSegId, true)
            // get the current app number
            appNum = currentSegId?.split('app')[1];
            // share the app number with Edition Selector to help determine the chapter to jump
            // notice: determining the chapter to jump is based on the chunk number and app number
            appState.set(appNum)
            console.log("app:", appNum, "chunk:", currentSegId.substring(0,3))
            // set the link info for the side panel
            unitLinkState.set({
                edition: props.source,
                chunk: currentSegId.substring(0,3),
                f1818Chp: sources.find(s  => s.label === `1818`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1])).id,
                f1823Chp: sources.find(s  => s.label === `1823`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1])).id,
                f1831Chp: sources.find(s  => s.label === `1831`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1])).id,
                fThomasChp: sources.find(s  => s.label === `Thomas`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1])).id,
                fMSChp: sources.find(s  => s.label === `MS`).units.find(u => u.chunks.find(c => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1]))?.id || ''
            });
            console.log(unitLinkState.get())
        } else {
            setSeg('')
        }

        // MS external link
        const witDetail = app.querySelector(`witDetail[wit='#fMS']`)
        const MS_Target = props.source == 'MS' ? witDetail?.getAttribute("target").replace('sga:', '').split('\s')[0] : null
        setMSTarget({suffix: MS_Target})

        // Thomas external link
        if (props.source == 'Thomas') {
            const note = el.querySelector("tei-note") as Element
            const add = el.querySelector("tei-add") as Element
            const del = el.querySelector("tei-del") as Element

            if (!(note || add || del)) {setThomasThumbnail(null); return}

            let ThomasPageNum = Math.min(Number(note?.getAttribute("n")||999), Number(add?.getAttribute("n")||999), Number(del?.getAttribute("n")||999)) || null
            const ThomasThumbnail = props.source === "Thomas" && ThomasPageNum
                ? 'https://www.themorgan.org/' +
                linkData.find(ld => ld.unit == props.unit && ld.page[0] == ThomasPageNum || ld.page[1] == ThomasPageNum)?.url
                : null
            setThomasThumbnail(ThomasThumbnail)
        }
    }

    return (
        <Behavior node={props.teiNode}>
            <span
                id={id.replace(/-.*/, '')}
                className={show.showVariants ? `${id.replace(/-.*/, '')} ${intensityClass} ${segBgClass}`: ''}
                style={{ cursor: "pointer"}}
                  onClick={handleClick}>
                {<TEINodes teiNodes={el.childNodes} {...props}/>}
            </span>
        </Behavior>
    );
};