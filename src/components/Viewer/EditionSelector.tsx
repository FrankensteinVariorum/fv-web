import { useStore } from '@nanostores/react';
import { Edition } from '../../data/old-edition';
import EditionDot from './helpers/EditionDot';
import { availableEditions, availableChunks, edition, chunk, getAvailableChunks } from '../../data/store';


export default function EditionSelector() {
    const $edition = useStore(edition);
    const $chunk = useStore(chunk);


    const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newEdition = event.target.value;
        const newAvailableChunks = getAvailableChunks(newEdition);

        if (!newAvailableChunks.includes($chunk)) {
            chunk.set(newAvailableChunks[0]);
        }
        edition.set(newEdition);
    };

    const getEditionDot = (select_edition) => {
        const edClassName = "dot ed-" + select_edition.value;
        return edClassName;
    };

    return (
            <form method="get" action="viewer">
                <label className='bold-choose'>CHOOSE A VERSION</label>
                <div className='css-yk16xz-control'>
                    <div className='css-1hwfws3'>
                        <div className='css-1uccc91-singleValue'>
    {/*                     <label><span className='dot' className={edClassName}></span>{$edition}</label> */}
                        </div>

                        <select className='select-style'name='tei' value={$edition} onChange={handleEditionChange}>
                            {availableEditions.map((option) => (

                                <option className={option.label} value={option.value}>
                                <span className={getEditionDot(option)}></span>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
    );
}