// @ts-ignore
import React, {createContext, useEffect, useState} from 'react';

export interface ShowState {
    ShowVariants: boolean
    ShowAnnotations: boolean
    ShowText: boolean
}

type ShowContextType = {
    show: ShowState | null
    setShow: React.Dispatch<React.SetStateAction<ShowState | null>>
}

export const ShowContext = createContext<ShowContextType>({
    show: null,
    setShow: () => console.warn('no show state provider')
});

export const ShowProvider: React.FC = ({ children }) => {
    const [show, setShow] = useState<ShowState | null>(() => {
        const storedShow = localStorage.getItem('show');
        return storedShow !== null ? JSON.parse(storedShow) : {
            ShowVariants: true,
            ShowAnnotations: false,
            ShowText: true,
    }});

    useEffect(() => {
        localStorage.setItem('show', JSON.stringify(show) || '');
    }, [show]);

    return (
        <ShowContext.Provider value={{ show, setShow }}>
            {children}
        </ShowContext.Provider>
    );
};

