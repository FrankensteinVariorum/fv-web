import React from "react";
import { BasicRouter, DefaultBehaviors, type IRoutes } from "@astro-tei/react";
import {Del} from "../tei/del.tsx";
import {Unclear} from "../tei/unclear.tsx";
import {PEnd} from "../tei/pEnd.tsx";
import {Add} from "../tei/add.tsx";

// This tei component is for the side panel
interface Props {
  doc: Document
  data: string
  elements: string[]
}

export default function TEI({doc, data, elements}: Props) {
  const {
    Tei,
    Eg,
    Graphic,
    List,
    Note,
    Ptr,
    Ref,
    TeiHeader,
  } = DefaultBehaviors;

  const routes: IRoutes = {
    "tei-tei": Tei,
    "tei": Tei,
    "tei-egxml": Eg,
    "tei-graphic": Graphic,
    "tei-list": List,
    "tei-note": Note,
    "note": Note,
    "tei-ptr": Ptr,
    "tei-ref": Ref,
    "tei-teiheader": TeiHeader,
    "tei-add": (props) => <Add {...props} />,
    "tei-del": (props) => <Del {...props} />,
    "mdel": (props) => <Del {...props} />,
    "unclear": (props) => <Unclear {...props} />,
    "p-end": (props) => <PEnd {...props} />,
  };

  // Support server side and client side DOM processing.
  const usableDoc = typeof DOMParser !== 'undefined' ? (new DOMParser()).parseFromString(data, "text/xml") : doc;

  return <BasicRouter doc={usableDoc} elements={elements} routes={routes} />
}