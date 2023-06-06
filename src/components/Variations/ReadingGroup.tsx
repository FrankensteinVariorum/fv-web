import React from "react";
import EditionDot from "../helpers/EditionDot";
import { Reading } from "../tei/variantContext";

interface Props {
    group: Reading
}

const ReadingGroup = ({group}: Props) => {
    const title = group.sources.join(", ");
    const dots = group.sources.map((ed) => <EditionDot small={true} edition={ed} key={ed}/>);

    const currentURL = window.location.pathname.split('/');
    const chapter = currentURL[currentURL.length - 1];

    return (
        <div className='reading-group'>
            <div className='reading-group-dots'>{ dots }</div>
            {/*<div className='reading-group-title'>{ ed }</div>*/}
            <div className='reading-group-title' >
                {group.sources.map((ed) =>
                    ed ? (
                        ed === '1831' ?
                            <a href={`../${ed}/${chapter.replace(/vol_\d_/, '')}`}>{ed}, </a>
                            :
                            <a href={`../${ed}/${chapter.replace(/^(?!vol_)/, "vol_1_")}`}>{ed}, </a>
                        ) :
                        null
                )}
            </div>

            <div className='reading-group-content'>
                {group.value ? group.value : <div className='empty-group'>[Edition is missing here]</div>}
            </div>
        </div>
    ) 
}


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

export default ReadingGroup;