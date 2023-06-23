import React, {useContext} from "react";
import EditionDot from "../helpers/EditionDot";
import {Reading, SegContext} from "../tei/variantContext";

interface Props {
    group: Reading
}

const ReadingGroup = ({group}: Props) => {
    const dots = group.sources.map((ed) => <EditionDot small={true} edition={ed} key={ed}/>);
    const currentURL = window.location.pathname.split('/');
    const chapter = currentURL[currentURL.length - 1].split('#')[0];
    const { seg } = useContext(SegContext); // storing which seg clicked on

    return (
        <div className='reading-group'>
            <div className='reading-group-dots'>{ dots }</div>
            <div className='reading-group-title' >
                {group.sources.map((ed) =>
                    ed ? (
                        ed === '1831' ?
                            // 1831 does not have vol in filename: ./1831/chapter_i#C07a_app1
                            <a href={`../${ed}/${chapter.replace(/vol_\d_/, '')}#${seg?.id}`}>{ed}, </a>
                            :
                            // other editions have vol number: ./1823/vol_1_chapter_i#C07a_app1
                            <a href={`../${ed}/${chapter.replace(/^(?!vol_)/, "vol_1_")}#${seg?.id}`}>{ed}, </a>
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