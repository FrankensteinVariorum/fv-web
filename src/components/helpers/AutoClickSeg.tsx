import React, {useEffect, useLayoutEffect, useRef} from 'react';

// when choose a seg to display a side panel and jumping to another edition page, displaying the same side panel automatically
export const AutoClickComponent = () => {
    // let id = null;
    useEffect(()=>{
            const fragmentIdentifier = window.location.hash; // Get ID from URL
            const id = fragmentIdentifier.substring(1); // Remove the '#' symbol
            console.log('seg id:', id)
            const span = document.getElementById(id);
            if (span) {
                span.click();
            }
    }, [])
    return null;
};