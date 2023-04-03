import { useStore } from '@nanostores/react';
import { Edition } from '../../data/old-edition';
import EditionDot from './helpers/EditionDot';
// import {availableEditions, onChange, SelectOption} from '../../data/store';

export const availableEditions = [
    { label: "MS", value: "MS", chunk: [7, 8, 9, 10] },
    { label: "1818", value: "1818", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "Thomas", value: "Thomas", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "1823", value: "1823", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "1831", value: "1831", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];

export default function EditionSelector() {
//     const $edition = useStore(SelectOption);
//     const edClassName = "ed-" + $edition;

    return (
        <div>
        <form method="get" action="viewer">
            <label className='bold-choose'>CHOOSE A VERSION</label>
            <div className='css-yk16xz-control'>
                <div className='css-1hwfws3'>
                {/*<label><span className='dot' className={edClassName}></span>{$edition}</label>*/}
{/*                 <!-- <select className='select-style'name='tei'onChange={getEdition(this)}>--> */}
                <select className='select-style'name='tei'>

                    {availableEditions.map((option) => (
                        <option className={option.label} value={option.value}>
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