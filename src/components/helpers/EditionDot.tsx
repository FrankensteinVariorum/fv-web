import React from "react";

interface EditionDotProps {
    edition: string;
    small?: boolean | undefined;
}

const EditionDot = ({edition, small}: EditionDotProps) => {
    let classes = `dot ed-${edition}`;
    if (small) {
        classes += ' small-dot';
    }
    return <span className={classes}/>;
}

export default EditionDot;