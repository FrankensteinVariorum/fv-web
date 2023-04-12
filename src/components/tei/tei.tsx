import React, { useState } from "react";
import BasicRouter from '@astro-tei/react';
import { DefaultBehaviors } from "@astro-tei/react";
import type { IRoutes } from "@astro-tei/react";
import { Seg } from './seg';
import { VariantContext, Variants } from "./variantsContext";
import Variation from "../Variations/Variation";

interface Props {
  data: string
  elements: string[]
  spine: string
  source: string
}

// Support server side and client side spine DOM processing.
let localParser;

if (typeof DOMParser !== 'undefined') {
  localParser = (data) => {
    return (new DOMParser()).parseFromString(data, "text/xml")
  }
} else {
  const {JSDOM} = await import("jsdom")
  localParser = (data) => {
    const j = new JSDOM(data, { contentType: "text/xml" })
    return j.window.document
  }
}

export default function Tei({doc, data, elements, spine, source}: Props) {

  const [variant, setVariant] = useState<Variants>()

  const {
    Tei,
    Note,
    Ptr,
    Ref,
    TeiHeader
  } = DefaultBehaviors;

  const usableSpine = localParser(spine)

  const routes: IRoutes = {
    "tei-tei": Tei,
    "tei-note": Note,
    "tei-ptr": Ptr,
    "tei-ref": Ref,
    "tei-teiheader": TeiHeader,
    "tei-seg": (props) => <Seg source={source} spine={usableSpine} {...props} />
  };

  // Support server side and client side DOM processing.
  const usableDoc = localParser(data)

  return <VariantContext.Provider value={[variant, setVariant]} >
    <aside id="viewer__marginalia"></aside>
    <BasicRouter doc={usableDoc} elements={elements} routes={routes} />
    <aside id="viewer_variations">
      <Variation />
    </aside>
  </VariantContext.Provider>
}