import React from 'react';
import { Edition } from '../data/edition';
// import Select from 'react-select';
import { SelectOption } from './EditionSelector';

interface PagingProps {
    edition: Edition | undefined;
    chunk: number;
    onChunkSelected: (chunk: number) => void;
}

interface PagingState {
    chunkIndex: number,
    selectedOption: SelectOption | undefined,
    availableChunks: SelectOption[],
    disablePrev: boolean,
    disableNext: boolean,
}

const availableEditions = [
    { label: "MS", value: "MS", chunk: [7, 8, 9, 10] },
    { label: "1818", value: "1818", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "Thomas", value: "Thomas", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "1823", value: "1823", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "1831", value: "1831", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];

class Paging extends React.Component<PagingProps, PagingState> {

    state = {
        chunkIndex: this.props.chunk,
        selectedOption: undefined as SelectOption | undefined,
        availableChunks: [] as SelectOption[],
        disablePrev: true,
        disableNext: false,
    }

    componentDidUpdate(prevProps: PagingProps) {
        if (this.props.edition !== prevProps.edition) {
            let chunks = [] as SelectOption[];
            if (this.props.edition) {
                chunks = this.props.edition.chunks.map((c) => ({ value: c.toString(), label: c.toString() } as SelectOption));
                let prevChunkIndex = 0;
                if (prevProps) {
                    prevChunkIndex = this.state.availableChunks.findIndex((opt) => opt.value === prevProps.chunk.toString());
                    if (prevChunkIndex === -1) {
                        prevChunkIndex = 0;
                    }
                }

                const firstChunk = this.props.edition.chunks[prevChunkIndex];
                this.setState( {
                    disableNext: false,
                    disablePrev: false,
                    availableChunks: chunks, chunkIndex: prevChunkIndex, selectedOption: chunks[prevChunkIndex] });
                this.props.onChunkSelected(firstChunk);
            }
        }

        if (this.props.chunk !== prevProps.chunk) {
            const index = this.state.availableChunks.findIndex((opt) => opt.value === this.props.chunk.toString());
            if (index !== -1) {
                this.setState({
                    availableChunks: [],
                    chunkIndex: index, 
                    selectedOption: this.state.availableChunks[index], 
                    disablePrev: index===0, 
                    disableNext: index===this.state.availableChunks.length - 1 
                });
            } else {
                console.warn(`Can't set pager to non existing chunk ${this.props.chunk}`);
                this.setState({
                    availableChunks: [],
                    chunkIndex: 0, selectedOption: this.state.availableChunks[0], disablePrev: true, disableNext: this.state.availableChunks.length === 1 });
            }
            
        }
    }

    onChunkChanged = (selectedOption: SelectOption) => {
        const chunk = parseInt(selectedOption.value);
        const index = this.state.availableChunks.findIndex((opt) => opt.value === chunk.toString());
        this.setState({availableChunks: [], disableNext: false, disablePrev: false, chunkIndex: index, selectedOption });

        this.props.onChunkSelected(chunk);
    }

    updateChunk = (delta: number) => {
        this.setState( {availableChunks: [], chunkIndex: 0, selectedOption: undefined, disablePrev: false, disableNext: false} );
        const chunk = this.state.chunkIndex + 1;
        const newChunk = chunk + delta;
        if (newChunk === 1) {
            this.setState( {
                availableChunks: [],
                chunkIndex: 0,
                disableNext: false,
                selectedOption: undefined,
                disablePrev: true} );
        } else if (newChunk === this.state.availableChunks.length) {
            this.setState( {
                availableChunks: [],
                chunkIndex: 0,
                disablePrev: false,
                selectedOption: undefined,
                disableNext: true })
        }
        if (this.props.edition!.chunks.indexOf(newChunk) === -1) {
            return;
        }
        const newOption = this.state.availableChunks.find((opt) => opt.value === newChunk.toString());
        if (!newOption) {
            console.error("Can't locate new option!")
        }
        this.setState({
            availableChunks: [],
            disableNext: false,
            disablePrev: false,
            chunkIndex: newChunk - 1, selectedOption: newOption });
        this.props.onChunkSelected((newChunk));
    }

    render() {
        return (
            <div>
                {this.props.edition ?
                <div>
                    {/*<div className='in-line'>*/}
                    {/*    <label className='bold-choose'>CHOOSE A SECTION</label>*/}
                    {/*    <Select*/}
                    {/*        className='select-style'*/}
                    {/*        onChange={this.onChunkChanged}*/}
                    {/*        options={this.state.availableChunks}*/}
                    {/*        value={this.state.selectedOption}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <div className='in-line'>
                    <label className='bold-choose'>CHOOSE A VERSION</label>
                    <div className='select-style css-yk16xz-control'>
                        <div className='css-1hwfws3'>
                            <div className='css-1uccc91-singleValue'>
                                <label>
                                    <span className='dot ed-MS'></span>
                                    MS
                                </label>
                            </div>
                            <select className='select-style' onChange={this.onChunkChanged}>
                                {availableEditions.map((option) => (
                                    <option key={chunk.key} value={chunk.value}>{chunk.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    </div>


                    <div className='in-line paging-buttons'>
                        <button onClick={() => this.updateChunk(-1)} className='prev'
                            disabled={this.state.disablePrev}/><label>Previous Section</label>
                        <label className='margin-button'>Next Section</label><button className='next'
                            onClick={() => this.updateChunk(1)} disabled={this.state.disableNext}/>
                    </div>
                </div>
                : ''}
            </div>
        );
    }
}

export default Paging;
