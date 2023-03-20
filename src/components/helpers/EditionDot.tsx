import { Edition } from "../../data/edition";
import React from "react";

interface EditionDotProps {
    edition: Edition;
    small?: boolean | undefined;
}

class EditionDot extends React.Component<EditionDotProps, any> {
    render() {
        let classes = `dot ed-${this.props.edition.code}`;
        if (this.props.small) {
            classes += ' small-dot';
        }

        return <span className={classes}/>;
    }
}

export default EditionDot;