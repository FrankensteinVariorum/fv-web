import { createContext } from 'react';

export interface ShowState {
  ShowVariants: boolean
  ShowAnnotations: boolean
  ShowText: boolean
}

type ShowContextType = {
  show: ShowState[] | null
  setShow: React.Dispatch<React.SetStateAction<ShowState | null>>
}

export const ShowContext = createContext<ShowContextType>({
  show: null,
  setShow: () => console.warn('no show state provider')
});


