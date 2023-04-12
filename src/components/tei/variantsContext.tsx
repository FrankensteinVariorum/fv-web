import { createContext } from 'react';

export interface Reading {
  sources: string[]
  value: string
  domValue?: Element
}

export interface Variants {
  readings: Reading[]
}

export const VariantContext = createContext<[Variants, ]>(null);

