import React, {createContext, useEffect, useState} from 'react';

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


export interface MSTargetLink {
  suffix: string
}
type MSTargetContextType = {
  msTarget: MSTargetLink | null
  setMSTarget: React.Dispatch<React.SetStateAction<MSTargetLink | null>>
}
export const MSTargetContext = createContext<MSTargetContextType>({
  msTarget: null,
  setMSTarget: () => console.warn('no ms target provider')
});


export interface ThomasThumbnail {
  link: string
}
type ThomasThumbnailContextType = {
  thomasThumbnail: ThomasThumbnail | null
  setThomasThumbnail: React.Dispatch<React.SetStateAction<ThomasThumbnail | null>>
}
export const ThomasThumbnailContext = createContext<ThomasThumbnailContextType>({
  thomasThumbnail: null,
  setThomasThumbnail: () => console.warn('no thomas thumbnail provider')
});
