import React from 'react';

interface TeiReactTextProps {
    text: string;
    showText: boolean;
    showVariations: boolean;
    showAnnotations: boolean;
}

class TeiReactText extends React.Component<TeiReactTextProps, any> {

    render() {
        let classes = 'tei-cdata';
        if (!this.props.showText) {
            classes += ' no-text';
        }

        return (
            <span className={classes}>
                { this.props.text }      
            </span>
        );
    }
}

export default TeiReactText;
