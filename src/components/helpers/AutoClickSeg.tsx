import React, {useEffect, useRef} from 'react';

export const AutoClickComponent = () => {
    const clickRef = useRef(true);
    let id = null;
    useEffect(()=>{
        if (clickRef.current) {
            const fragmentIdentifier = window.location.hash;
            id = fragmentIdentifier.substring(1); // Remove the '#' symbol
            console.log("seg id(AutoClickSeg.tsx):", id);
            const span = document.getElementById(id);
            if (span) {
                span.click();
            }
            clickRef.current = false;
        }
    }, [id])

    return null;
};