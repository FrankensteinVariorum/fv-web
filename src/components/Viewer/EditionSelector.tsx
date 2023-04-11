import React from 'react'
import Select from 'react-select'
import {sources} from '../../data/units.json'

export default function EditionSelector({source, setSource, unit}) {

    const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSource = event.target.value
        const newSourceData = sources.filter(s => s.label === event.target.value)[0]
        if (newSourceData) {
            let path
            if (newSourceData.units.map(u => u.label.replace(" ", "").toLowerCase()).indexOf(unit) === -1) {
                const newUnit = newSourceData.units[0].label
                path = `/${newSource}/${newUnit.replace(" ", "").toLowerCase()}`
            } else {
                path = `/${newSource}/${unit}`
            }
            window.location.replace(path)
        }

    };

    const getEditionDot = (select_edition) => {
        const edClassName = "dot ed-" + select_edition;
        return edClassName;
    };

    return (
            <form method="get" action="viewer">
                <label className='bold-choose'>CHOOSE A VERSION</label>
                {/*<Select*/}
                {/*    className='select-style'*/}
                {/*    onChange={handleEditionChange}*/}
                {/*    value={source}*/}
                {/*    options={sources.map((s) => {*/}
                {/*        return {*/}
                {/*            value: s.label,*/}
                {/*            label: <label><span className={getEditionDot(s.label)}>{s.label}</span></label>*/}
                {/*        }*/}
                {/*    })}*/}
                {/*></Select>*/}
                <select className='select-style' name='tei' value={source} onChange={handleEditionChange}>
                    {sources.map((source) => (

                        <option className={source.label} value={source.label} key={source.label}>
                        <span className={getEditionDot(source.label)}></span>
                            {source.label}
                        </option>
                    ))}
                </select>
            </form>
    );
}