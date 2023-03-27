import { useStore } from '@nanostores/react';
import { Edition } from '../data/edition';
import EditionDot from './helpers/EditionDot';
import {availableEditions, SelectOption} from './store';


export default function EditionSelector() {
    const $edition = useStore(SelectOption);
    const edClassName = "ed-" + $edition;

    return (
        <div>
        <form method="get" action=".">
            <label className='bold-choose'>CHOOSE A VERSION</label>
            <div className='css-yk16xz-control'>
                <div className='css-1hwfws3'>
                <label><span className='dot' className={edClassName}></span>{$edition}</label>
                <select className='select-style'name='tei'>
                    {availableEditions.map((option) => (
                        <option className={option.label} key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                </div>
            </div>
            <button type="submit">Search</button>
            </form>
        </div>
    );
}