import React, {useEffect, useContext, useRef} from 'react';

export const AutoClickComponent = (id) => {
    const clickRef = useRef(true);
    useEffect(()=>{
        if (clickRef.current) {
            const fragmentIdentifier = window.location.hash;
            const id = fragmentIdentifier.substring(1); // Remove the '#' symbol
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

