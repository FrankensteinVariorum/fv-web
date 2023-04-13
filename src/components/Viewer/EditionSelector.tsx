import React from 'react'
import Select from 'react-select'
import {sources} from '../../data/units.json'
import slugify from '../helpers/slugify';

export default function EditionSelector({source, unit}) {

    const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSource = event.target.value
        const newSourceData = sources.filter(s => s.label === event.target.value)[0]
        if (newSourceData) {
            let path
            if (newSourceData.units.map(u => slugify(u.label)).indexOf(unit) === -1) {
                const newUnit = newSourceData.units[0].label
                path = `/viewer/${newSource}/${slugify(newUnit)}`
            } else {
                path = `/viewer/${newSource}/${unit}`
            }
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
                ></Select>
    */

    return (
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
    );
}