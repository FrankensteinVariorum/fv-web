// @ts-ignore
import React, {useContext, useEffect, useState} from 'react';
// @ts-ignore
import {Behavior, TBehavior} from "@astro-tei/react";
import {TEINodes} from "react-teirouter";
// @ts-ignore
import linkData from '../../data/thumbnails.json'
import {showState} from "../../data/nanostores.js";
import {useStore} from "@nanostores/react";

interface TEIProps {
    source: string,
    unit: string,
    teiNode: Node,
}

export const Note: TBehavior = (props: TEIProps) => {
    const el = props.teiNode as Element;
    const resp = el.getAttribute("resp");
    const show = useStore(showState); // nano stores

    // if the resp is `#MWS` or there is a star symbol, then the note might be by author in Thomas edition.
    // if the note is in edition MS and there is no resp, then the note might be by author.
    // otherwise, the note is by FV team.
    let isByAuthor = (resp == '#MWS' || el.textContent?.includes("*")) ? true : (props.source == 'MS' && !resp)
    // always show the note if it is from the book
    let isShowNote = isByAuthor ? true : show.showNote
    // the note from book has the same font size with other text, while the note added by FV-Team has smaller font size.
    let fontSize = isByAuthor ? `100%` : `0.85%`

    return (
        isShowNote ?
            <Behavior node={props.teiNode}>
                <div className="note"
                     title= {`note by ${isByAuthor ? 'Mary Shelley' : resp ? resp : 'anonymous'}`}
                     style={{ fontSize: fontSize }}>
                    <div>
                        {resp ? <span className="resp">{isByAuthor ? 'Mary Shelley' : resp ? resp : 'anonymous'}: </span> : null}
                        <TEINodes teiNodes={el.childNodes} {...props} />
                    </div>
                </div>
            </Behavior>
        : null
    );
}