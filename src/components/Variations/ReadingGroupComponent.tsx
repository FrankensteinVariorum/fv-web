import { ReadingGroup } from "../../data/spine";
import React from "react";
import EditionDot from "../helpers/EditionDot";
import { TeiConverter } from "../../tei-processing/tei-converter";


interface ReadingGroupComponentProps {
    group: ReadingGroup;
}

// Note: This class is called ReadingGroupComponent because ReadingGroup is already taken
class ReadingGroupComponent extends React.Component<ReadingGroupComponentProps> {
    render() {
        const editionNames = this.props.group.editions.map((ed) => ed.name);
        const title = editionNames.join(', ')
        const dots = this.props.group.editions.map((ed) => <EditionDot small={true} edition={ed} key={ed.code}/>);

        let content;
        if (this.props.group.element) {
            const converter = new TeiConverter(false, false, true);
            content = converter.teiToReactElement(this.props.group.element);
        } else {
            content = (<div className='empty-group'>[Edition is missing here]</div>);
        }

        return (
            <div className='reading-group'>
                <div className='reading-group-dots'>{ dots }</div>
                <div className='reading-group-title'>{ title }</div>
                <div className='reading-group-content'>
                    { content }
                </div>
            </div>
        )
    }
}

export default ReadingGroupComponent;