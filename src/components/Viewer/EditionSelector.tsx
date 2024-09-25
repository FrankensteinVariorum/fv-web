import React from 'react'
import {sources} from '../../data/units.json'
import slugify from '../helpers/slugify.ts';
import {appState} from "../../data/nanostores.ts";

export default function EditionSelector({source, unit}) {
    const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // when edition is changed, the chunk should be kept same.
        const newSource = event.target.value
        const newSourceData = sources.filter(s => s.label === event.target.value)[0]
        const currentChunk = sources.find(s => s.label == source).units.find(u => u.id == unit).chunks[0].label

        if (newSourceData) {
            const appNum = appState.get()
            // if the new unit is not available (e.g. MS starts from C07), return the first unit available.
            const newUnit = sources.find(s  => s.label === newSource).units.find(u =>
                    u.chunks.find(c => (c.label == currentChunk) && (c.apps[0] <= appNum && appNum <= c.apps[1])))?.id
                    ||sources.find(s => s.label === newSource).units[0].id
            const path = `/viewer/${newSource}/${slugify(newUnit)}`
            window.location.replace(path)
        }
    };

    return (
        <div>
            <div className='paging'>
                <div className='in-line'>
                    <form method="get" action="viewer">
                        <label className='bold-choose'>CHOOSE A VERSION</label>
                        <select className='select-style' name='tei' value={source} onChange={handleEditionChange}>
                            {sources.map((source) => (
                                <option className={source.label} value={source.label} key={source.label}>
                                    {source.label}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
            </div>
        </div>
    );
}