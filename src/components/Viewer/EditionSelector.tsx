import React, {useContext, useEffect, useState} from 'react'
import Select from 'react-select'
import {sources} from '../../data/units.json'
import slugify from '../helpers/slugify';
import {VolContext} from "./volContext";

export default function EditionSelector({source, unit}) {
    const { vol, setVol } = useContext(VolContext);

    const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSource = event.target.value
        const newSourceData = sources.filter(s => s.label === event.target.value)[0]
        if (newSourceData) {
            let path, newUnit
            // if (newSourceData.units.map(u => slugify(u.label)).indexOf(unit) === -1) {
            // Since 1831 does not have vol info,
            // so checking if the same chapter available in the new source instead of checking if the same vol and chapter available
            if (!newSourceData.units.some(u => String(u.id).includes(unit.replace(/vol_\w+_/, '')))){
                    newUnit = newSourceData.units[0].label
            } else {
                newSource == '1831' ?
                    newUnit = unit.replace(/vol_\d+_/, '')
                    :
                    newUnit = unit.replace(/^(?!vol_)/, `vol_${vol}_`)
            }
            path = `/viewer/${newSource}/${slugify(newUnit)}`

            const getVol = newUnit.split('_')[1];
            /\d+/.test(getVol) ? setVol(getVol) : null; // check if the got vol valid

            window.location.replace(path)
        }
    };

    const getEditionDot = (select_edition) => {
        const edClassName = "dot ed-" + select_edition;
        return edClassName;
    };
    /*
        <Select
            className='select-style'
            onChange={handleEditionChange}
            value={source}
            options={sources.map((s) => {
                return {
                    value: s.label,
                    label: <label><span className={getEditionDot(s.label)}>{s.label}</span></label>
                }
            })}
        />
    */

    return (
        <div>
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
    );
}