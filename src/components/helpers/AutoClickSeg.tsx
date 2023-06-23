import React, {useEffect, useRef} from 'react';

// when choose a seg to display a side panel and jumping to another edition page, displaying the same side panel automatically
export const AutoClickComponent = () => {
    // ensure only clicking automatically when page opens and not repeatedly during re-renders
    const clickRef = useRef(true);
    // let id = null;
    useEffect(()=>{
        if (clickRef.current) {
            const fragmentIdentifier = window.location.hash; // Get ID from URL
            const id = fragmentIdentifier.substring(1); // Remove the '#' symbol
            console.log('seg id:', id)
            const span = document.getElementById(id);
            if (span) {
                span.click();
            }
            clickRef.current = false;
        }
    }, [])
    return null;
};