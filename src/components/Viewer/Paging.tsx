import { useStore } from '@nanostores/react';
import { Edition } from '../../data/edition';
import {availableEditions, onChange, SelectOption} from '../../data/store';

export default function Paging() {
    const edition = useStore(SelectOption);
    const availableChunks = availableChunks(edition);
    const edClassName = "ed-" + edition;
    return (
        <div>
            <div>
                <div className='in-line'>
                <form method="get" action="submit-form.php">
                    <label className='bold-choose'>CHOOSE A SECTION</label>
                    <div className='select-style css-yk16xz-control'>
                        <div className='css-1hwfws3'>
                            {/*<label><span className='dot' className={edClassName}></span>{$edition}</label>*/}
                            <select className='select-style' name={"C"} >
                                {availableChunks.map((chunk) => (
                                    <option>{chunk}</option>
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
