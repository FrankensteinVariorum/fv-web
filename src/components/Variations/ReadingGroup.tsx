import React, {useContext, useEffect, useRef, useState} from "react";
import EditionDot from "../helpers/EditionDot";
import {Reading, SegContext} from "../tei/variantContext";
import {unitLinkState} from "../../data/nanostores";
import TEI from "../../tei-processing/tei";


interface Props {
    group: Reading
}

const ReadingGroup = ({group}: Props) => {
    const dots = group.sources.map((ed) => <EditionDot small={true} edition={ed} key={ed}/>);
    const { seg } = useContext(SegContext); // storing which seg clicked on

    // define tei data
    let data = `<?xml version="1.0" encoding="UTF-8"?><TEI xmlns="http://www.tei-c.org/ns/1.0">${group.value}</TEI>`
    console.log(data)
    return (
        <div className='reading-group'>
            {/*<div className='reading-group-dots'>{ dots }</div>*/}
            <div className='reading-group-title' >
                {group.sources.map((ed) =>
                    group.value != "" ? (
                        <a className={`clr--${ed.toLowerCase()}`} href={`/fv-web2023/viewer/${ed}/${unitLinkState.get()[`f${ed}Chp`]}#${seg?.id}`}>{ed}, </a>
                    ) : <a className={`clr--${ed.toLowerCase()}`}>{ed}, </a>
                )}
            </div>

            <div className='reading-group-content'>
                {group.value !== "" ? <TEI doc={null} data={data} elements={["del", "p", "add", "mdel", "unclear", "note"]}/> :
                    <div className="empty-group">∅</div>}
            </div>
        </div>
    )
}

export default ReadingGroup;