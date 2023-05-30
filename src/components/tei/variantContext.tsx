import { createContext } from 'react';

export interface Reading {
  sources: string[]
  value: string
  domValue?: Element
}

export interface Variant {
  readings: Reading[]
}

type VariantContextType = {
  variant: Variant | null
  setVariant: React.Dispatch<React.SetStateAction<Variant | null>>
}

export const VariantContext = createContext<VariantContextType>({
  variant: null,
  setVariant: () => console.warn('no variant data provider')
});


