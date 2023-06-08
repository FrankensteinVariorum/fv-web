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


export interface SegInfo {
  id: string
}

type SegContextType = {
  seg: SegInfo | null
  setSeg: React.Dispatch<React.SetStateAction<SegInfo | null>>
}

export const SegContext = createContext<SegContextType>({
  seg: null,
  setSeg: () => console.warn('no seg id provider')
});


