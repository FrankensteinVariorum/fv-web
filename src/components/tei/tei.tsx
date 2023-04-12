import React from "react";
import BasicRouter from '@astro-tei/react';
import { DefaultBehaviors } from "@astro-tei/react";
import type { IRoutes } from "@astro-tei/react";
import { Seg } from './seg';

interface Props {
  doc: Document
  data: string
  elements: string[]
  spine: Document
}

export default function Tei({doc, data, elements, spine}: Props) {
  const {
    Tei,
    Eg,
    Graphic,
    List,
    Note,
    Ptr,
    Ref,
    TeiHeader
  } = DefaultBehaviors;

  const routes: IRoutes = {
    "tei-tei": Tei,
    "teieg-egxml": Eg,
    "tei-graphic": Graphic,
    "tei-list": List,
    "tei-note": Note,
    "tei-ptr": Ptr,
    "tei-ref": Ref,
    "tei-teiheader": TeiHeader,
    "tei-seg": (props) => <Seg spine={spine} {...props} />
  };

  // Support server side and client side DOM processing.
  const usableDoc = typeof DOMParser !== 'undefined' ? (new DOMParser()).parseFromString(data, "text/xml") : doc;

  return <BasicRouter doc={usableDoc} elements={elements} routes={routes} />
}