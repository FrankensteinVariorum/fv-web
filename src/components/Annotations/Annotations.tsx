import React from "react";

interface AnnotationsProps {
    annotations: Array<Object>;
}

class Annotations extends React.Component<AnnotationsProps> {
    render() {
        const annotation: Array<Object> = []
        for (const annoData of this.props.annotations) {
            const selector = annoData["target"]["selector"].filter((s) => s["type"] === "TextQuoteSelector")[0]
            annotation.push(<div key={annoData["id"]} style={{
                lineHeight: '1.5em',
                display: 'block', color: 'darkslategray', marginTop: '2em'
            }}>
                <blockquote>"...{selector.prefix} <span style={{ color: '#3F3730', fontWeight: 'bolder' }}>{selector.exact}</span> {selector.suffix}..."</blockquote>
                <span style={{ fontStyle: "italic" }}>{annoData["body"].filter((a) => a["purpose"] === "commenting")[0]["value"]}</span>
            </div>)
        }
        return <>{annotation}</>
    }
}

export default Annotations;