import { Edition } from '../../data/edition';
import {sources} from '../../data/units.json'
import slugify from '../helpers/slugify';

export default function Paging({source, unit}) {

    const sourceData = sources.filter(s => s.label === source)[0]

    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newUnit = event.target.value

        const path = `/viewer/${source}/${slugify(newUnit)}`
        window.location.replace(path)
    };

    return (
        <div>
            <div>
                <div className='in-line'>
                <form method="get" action="viewer">
                    <label className='bold-choose'>CHOOSE A SECTION</label>
                    <div className='select-style css-yk16xz-control'>
                        <div className='css-1hwfws3'>
                            <select className='select-style' value={unit} onChange={handleUnitChange}>
                                {sourceData.units.map((u) => (
                                    <option key={u.label} value={slugify(u.label)}>{u.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </form>
                </div>

                <div className='in-line paging-buttons'>
                    <button className='prev'/><label>Previous Section</label>
                    <label className='margin-button'>Next Section</label><button className='next'/>
                </div>
            </div>
        </div>


    );
}

