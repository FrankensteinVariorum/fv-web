import { useStore } from '@nanostores/react';
import { Edition } from '../../data/edition';
import {availableChunks, edition, chunk, getAvailableChunks}  from '../../data/store';

export default function Paging() {
    const $edition = useStore(edition);
    const $chunk = useStore(chunk);
    const $availableChunks = getAvailableChunks($edition);
    const edClassName = "ed-" + $edition;

    const handleChunkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        chunk.set(Number(event.target.value));
    };

    return (
        <div>
            <div>
                <div className='in-line'>
                <form method="get" action="viewer">
                    <label className='bold-choose'>CHOOSE A SECTION</label>
                    <div className='select-style css-yk16xz-control'>
                        <div className='css-1hwfws3'>
                            {/*<label><span className='dot' className={edClassName}></span>{$edition}</label>*/}
                            <select className='select-style' name={"C"} value={$chunk} onChange={handleChunkChange}>
                                {$availableChunks.map((chunkOption) => (
                                    <option>{chunkOption}</option>
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

