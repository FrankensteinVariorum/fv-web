import React, {useState} from "react";
import { BasicRouter, DefaultBehaviors, type IRoutes } from "@astro-tei/react";
import { Seg } from './seg';
import {
  type Variant, VariantContext,
  type SegInfo, SegContext,
  type MSTargetLink, MSTargetContext,
  type ThomasThumbnail, ThomasThumbnailContext
} from "./variantContext";
import Variation from "../Variations/Variation";
import {AutoClickComponent} from "../helpers/AutoClickSeg";
import {Del} from "./del";
import {Unclear} from "./unclear";
import {PEnd} from "./pEnd";
import {Add} from "./add";
import {Note} from "./note";

// this tei component is for reading panel
interface Props {
  data: string
  elements: string[]
  spine: string
  source: string
  unit: string
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

export default function Tei({data, elements, spine, source, unit}: Props) {
  const [variant, setVariant] = useState<Variant>()
  const [seg, setSeg] = useState<SegInfo>();
  const [msTarget, setMSTarget] = useState<MSTargetLink>();
  const [thomasThumbnail, setThomasThumbnail] = useState<ThomasThumbnail>(null)

  const {
    Tei,
    // Note,
    Ptr,
    Ref,
    TeiHeader,
  } = DefaultBehaviors;

  const usableSpine = localParser(spine)

  const routes: IRoutes = {
    "tei-tei": Tei,
    // "tei-note": Note,
    "tei-ptr": Ptr,
    "tei-ref": Ref,
    "tei-teiheader": TeiHeader,
    "tei-seg": (props) => <Seg source={source} spine={usableSpine} unit={unit} {...props} />,
    "tei-del": (props) => <Del {...props} />,
    "tei-mdel": (props) => <Del {...props} />,
    "mdel": (props) => <Del {...props} />,
    "unclear": (props) => <Unclear {...props} />,
    "tei-p-end": (props) => <PEnd {...props} />,
    "tei-add": (props) => <Add {...props} />,
    "tei-note": (props) => <Note source={source} unit={unit} {...props} />,
  };

  // Support server side and client side DOM processing.
  const usableDoc = localParser(data)
  return(
    <ThomasThumbnailContext.Provider value={{thomasThumbnail,setThomasThumbnail}}>
      <MSTargetContext.Provider value={{msTarget, setMSTarget}}>
        <SegContext.Provider value={{seg, setSeg}} >
          <AutoClickComponent/>
          <VariantContext.Provider value={{variant, setVariant}} >
            <aside id="viewer__marginalia"/>
            <BasicRouter doc={usableDoc} elements={elements} routes={routes}/>
            <Variation/>
          </VariantContext.Provider>
        </SegContext.Provider>
      </MSTargetContext.Provider>
    </ThomasThumbnailContext.Provider>
  )
}