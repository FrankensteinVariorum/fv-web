// @ts-ignore
import React, {useContext, useEffect, useRef, useState} from "react";
import ReadingGroup from "./ReadingGroup";
import {MSTargetContext, ThomasThumbnailContext, VariantContext} from "../tei/variantContext";
// @ts-ignore
import sgalogo from "../../assets/images/sgalogo.png";
// @ts-ignore
import morganlogo from "../../assets/images/morganlogo.png";
import {useStore} from "@nanostores/react";
import {showState} from "../../data/nanostores.js";

const Variation = () => {
    const show = useStore(showState)
    const {variant} = useContext(VariantContext)
    const { msTarget} = useContext(MSTargetContext)
    let MStargetLink = `http://shelleygodwinarchive.org/sc/oxford/ms_abinger/${msTarget}`
    const {thomasThumbnail} = useContext(ThomasThumbnailContext)
    let ThomasThumbnailLink = `${thomasThumbnail}`
    const [sidePanelHeight, setSidePanelHeight] = useState<number | null>(null);

    useEffect(() => {
        const container = document.querySelector('#viewer__contents');
        const sidePanel = document.querySelector('#viewer_variations');
        if (!container || !sidePanel) return;
        function updateSidePanelHeight() {
            const containerRect = container.getBoundingClientRect();
            const visibleHeight =  containerRect.bottom;
            const sidePanelMaxHeight = Math.min(containerRect.height, visibleHeight);
            // console.log('container:', containerRect.bottom, 'side panel:',sidePanelMaxHeight)
            setSidePanelHeight(sidePanelMaxHeight);
        }
        // the dynamic height function should not work for mobile
        if (window.innerWidth > 740) { // 46.25em * 16px/em = 740
            updateSidePanelHeight();
            window.addEventListener('scroll', updateSidePanelHeight);
        }
    });

    if (!variant || !show.showVariants) return null

    return (
        <aside id="viewer_variations" style={{ height: sidePanelHeight }}>
            <div className="app-list">
                <hr className="app-list-to-divider"/>
                {
                    variant.readings.map(g => <ReadingGroup group={g}/>)
                }
                <div className='link-list'>
                {msTarget ? <a href={MStargetLink} className='sga_logo' target='_blank'>
                                <img src={sgalogo.src} alt='The Shelley-Godwin Archive Logo'/><p>View this passage on the Shelley-Godwin Archive</p>
                            </a>
                    : null
                }
                {thomasThumbnail ? <a href={ThomasThumbnailLink} className='morgan_logo' target='_blank'>
                        <img src={morganlogo.src} alt='The Morgan Library Logo'/><p>View this page from the Thomas Copy at the Morgan Library</p>
                    </a>
                    : null
                }
                </div>
            </div>
        </aside>

    ) 
}

export default Variation;