import { useStore } from '@nanostores/react';
import { Edition } from '../data/edition';
import {availableChunks, SelectOption} from './store';
// import type availableChunks from './store';


export default function Paging() {
    const $edition = useStore(SelectOption);
    // const chunks = availableChunks($edition);
    const $chunks = useStore(availableChunks);
    const edClassName = "ed-" + $edition;

    return (
        <div>
            <div>
                <div className='in-line'>
                <form method="get" action="submit-form.php">
                    <label className='bold-choose'>CHOOSE A SECTION</label>
                    <div className='select-style css-yk16xz-control'>
                        <div className='css-1hwfws3'>
                            <label><span className='dot' className={edClassName}></span>{$edition}</label>
                            <select className='select-style'>
                                {Object.values($chunks).map((option) => (
                                    <option key={option.key} value={option.value}>{option.value}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </form>
                </div>


                <div className='in-line paging-buttons'>
                    <button onClick={() => this.updateChunk(-1)} className='prev'
                        disabled={this.state.disablePrev}/><label>Previous Section</label>
                    <label className='margin-button'>Next Section</label><button className='next'
                        onClick={() => this.updateChunk(1)} disabled={this.state.disableNext}/>
                </div>
            </div>
        </div>
    );
}
