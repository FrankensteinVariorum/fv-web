import React from 'react';
import Select from 'react-select';
import { Edition } from '../data/edition';
import FvStore from '../data/store';
import EditionDot from './helpers/EditionDot';

export interface SelectOption {
    value: string;
    label: any;// HTMLSpanElement;
}

interface EditionSelectorProps {
    editions: Edition[],
    edition: Edition,

    onEditionSelected: (edition: Edition) => void;
}

interface EditionSelectorState {
    availableEditions: SelectOption[],
    selectedEdition: SelectOption | undefined,
}

const availableEditions = [
    { label: "MS", value: "MS", chunk: [7, 8, 9, 10] },
    { label: "1818", value: "1818", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "Thomas", value: "Thomas", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "1823", value: "1823", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "1831", value: "1831", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];



class EditionSelector extends React.Component<EditionSelectorProps, EditionSelectorState> {

    state = {
        availableEditions: [] as SelectOption[],
        selectedEdition: undefined as SelectOption | undefined,
    }
    
    componentDidMount = () => {
        const editions = FvStore.editions.map((ed, index) => ({ key: index, value: ed.code, label: <label><EditionDot edition={ ed }/>{ed.name}</label> } as SelectOption));

        // Select the first edition
        this.setState({ availableEditions: editions, selectedEdition: editions[0] });
        this.props.onEditionSelected(this.props.editions[0]);
    }

    componentDidUpdate(prevProps: EditionSelectorProps) {
        if(prevProps.edition !== this.props.edition) {
            const option = this.state.availableEditions.find((ed) => ed.value === this.props.edition.code);
            if(option) {
                this.setState( {availableEditions: [], selectedEdition: option });
            }
        }
    }

    editionChanged = (selectedOption: SelectOption) => {
        const edition = FvStore.editions.find((ed) => ed.code === selectedOption.value);
        if(!edition) {
            console.warn(`Couldn't find edition for selection ${selectedOption.value}`);
            return;
        }

        this.setState( {availableEditions: [], selectedEdition: selectedOption });
        this.props.onEditionSelected(edition);
    }

    render() {
        return (
         // <div>
         //     <label className='bold-choose'>CHOOSE A VERSION</label>
         //     <Select
         //         className='select-style'
         //         onChange={this.editionChanged}
         //         options={this.state.availableEditions}
         //         value={this.state.selectedEdition}
         //     />
         // </div>

        // <div>
        //     <label className='bold-choose'>Choose an edition:</label>
        //     <select className='select-style' >
        //         <option value="MS">MS</option>
        //         <option value="1818">1818</option>
        //         <option value="Thomas">Thomas</option>
        //         <option value="1823">1823</option>
        //         <option value="1831">1831</option>
        //     </select>
        // </div>

        <div>
            <label className='bold-choose'>CHOOSE A VERSION</label>
            <div className='css-yk16xz-control'>
                <div className='css-1hwfws3'>
                    {/*<div className='css-1uccc91-singleValue'>*/}
                    {/*    <label>*/}
                    {/*        <span className='dot ed-${edition}'></span>*/}
                    {/*        MS*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                <select className='select-style'onChange={() => this.editionChanged}>
                    {availableEditions.map((option) => (
                        <option className={option.label} key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                </div>
            </div>
        </div>

    );
    }
}

export default EditionSelector;
