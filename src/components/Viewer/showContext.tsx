import React, {createContext, useState} from 'react';

export interface ShowState {
  ShowVariants: boolean
  ShowAnnotations: boolean
  ShowText: boolean
}

export const defaultShowState: ShowState = {
  ShowVariants: true,
  ShowAnnotations: false,
  ShowText: true,
};

type ShowContextType = {
  show: ShowState | null
  setShow: React.Dispatch<React.SetStateAction<ShowState | null>>
}

export const ShowContext = createContext<ShowContextType>({
  show: null,
  setShow: () => console.warn('no show state provider')
});

type ShowProviderProps = {
  children: React.ReactNode;
};

export const ShowProvider: React.FC = ({ children }: ShowProviderProps) => {
  const [show, setShow] = useState<ShowState>({
    ShowVariants: true,
    ShowAnnotations: false,
    ShowText: true,
  });

  return (
      <ShowContext.Provider value={{ show, setShow }}>
        {children}
      </ShowContext.Provider>
  );
};
