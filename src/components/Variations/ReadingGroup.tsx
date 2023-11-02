// @ts-ignore
import React, {useContext} from "react";
import {Reading, SegContext} from "../tei/variantContext";
import {unitLinkState} from "../../data/nanostores";
import TEI from "./tei";

interface Props {
    group: Reading
}

const ReadingGroup = ({group}: Props) => {
    const { seg } = useContext(SegContext); // storing which seg clicked on
    let data = `<?xml version="1.0" encoding="UTF-8"?><TEI xmlns="http://www.tei-c.org/ns/1.0">${group.value}</TEI>`

    const delSpanStart = /<delspanstart\/>/g;
    const delSpanEnd = /<delspanend\/>/g;
    data = data.replace(delSpanStart, `<span class="delspan">✗—</span>`);
    data = data.replace(delSpanEnd, `<span class="delspan">—✗</span>`);

    return (
        <div className='reading-group'>
            <div className='reading-group-title' >
                {group.sources.map((ed) =>
                    group.value != "" ? (
                        <a className={`clr--${ed.toLowerCase()}`} href={`/viewer/${ed}/${unitLinkState.get()[`f${ed}Chp`]}#${seg?.id}`}>{ed}, </a>
                    ) : <a className={`clr--${ed.toLowerCase()}`}>{ed}, </a>
                )}
            </div>

            <a className='reading-group-content' href={`#${seg.id}`}>
                {group.value !== "" ? <TEI doc={null} data={data} elements={["del", "p", "add", "mdel", "unclear", "note"]}/> :
                    <div className="empty-group" title={`${group.sources.join(', ')} ${group.sources.length > 1 ? 'are' : 'is'} missing here.`}>∅</div>}
            </a>
        </div>
    )
}

export default ReadingGroup;
