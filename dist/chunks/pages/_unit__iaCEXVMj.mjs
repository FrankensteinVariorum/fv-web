import { JSDOM } from 'jsdom';
import CETEI from 'CETEIcean';
import React, { useEffect, createContext, useContext, useState } from 'react';
import { serialize, defineCustomElement } from 'CETEIcean/utilities.js';
import { TEINodes, TEINode, TEIRoute, TEIRender } from 'react-teirouter';
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, h as renderSlot, u as unescapeHTML } from '../astro_kzB3uNQ_.mjs';
import 'kleur/colors';
import { s as sources, $ as $$Layout, a as slugify } from './404_FCjAz4Rz.mjs';
/* empty css                           */
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

const variations = new Proxy({"src":"/_astro/intensity_legend.Vb4sf6jy.svg","width":320,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const EditionDot = ({ edition, small }) => {
  let classes = `dot ed-${edition}`;
  if (small) {
    classes += " small-dot";
  }
  return /* @__PURE__ */ React.createElement("span", { className: classes });
};

function Header({ source }) {
  const sourceLabels = sources.map((s) => /* @__PURE__ */ React.createElement("label", { key: s.label, className: "edition-label" }, /* @__PURE__ */ React.createElement(EditionDot, { edition: s.label, key: s.label }), s.label));
  return /* @__PURE__ */ React.createElement("div", { id: "header" }, /* @__PURE__ */ React.createElement("header", { className: "viewer__cols" }, /* @__PURE__ */ React.createElement("div", { id: "viewer__legend-editions" }, sourceLabels), /* @__PURE__ */ React.createElement("div", { id: "viewer__title", className: "center-label" }, source ? /* @__PURE__ */ React.createElement("h2", null, source, " Edition") : /* @__PURE__ */ React.createElement("h2", null, "Edition")), /* @__PURE__ */ React.createElement("div", { id: "viewer__legend-variance" }, /* @__PURE__ */ React.createElement("label", null, "Amount of Variance"), /* @__PURE__ */ React.createElement("img", { className: "variations", src: variations.src, alt: "variations scale" }))), /* @__PURE__ */ React.createElement("hr", { className: "line" }), /* @__PURE__ */ React.createElement("div", { className: "viewer__cols" }, /* @__PURE__ */ React.createElement("div", { className: "center-label" }, "Marginalia"), /* @__PURE__ */ React.createElement("div", { className: "center-label" }, "Text"), /* @__PURE__ */ React.createElement("div", { className: "center-label" }, "Variations")));
}

const $$Astro$3 = createAstro("https://frankensteinvariorum.github.io");
const $$Viewer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Viewer;
  const { source } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "viewer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="primary-content" role="main"> <h1>Variorum Viewer</h1> </main> <div id="root"> <div> <div class="App"> <section id="viewer"> ${renderComponent($$result2, "Controls", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/components/Viewer/Controls", "client:component-export": "default" })} ${renderComponent($$result2, "Header", Header, { "source": source })} <div${addAttribute(`viewer__contents`, "id")}${addAttribute(`viewer__cols ${source}`, "class")}> <!-- <Toolbar /> --> ${renderSlot($$result2, $$slots["default"])} </div> <hr class="line"> <div id="viewer_pagination_controls"> ${renderComponent($$result2, "Controls", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/components/Viewer/Controls", "client:component-export": "default" })} </div> </section> </div> </div> </div> ` })}`;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/components/Viewer/Viewer.astro", void 0);

const processTei = (data) => {
  const jdom = new JSDOM(data, { contentType: "text/xml" });
  const teiDoc = jdom.window.document;
  const ceteicean = new CETEI({
    documentObject: teiDoc
  });
  const teiData = ceteicean.preprocess(teiDoc);
  teiData.setAttribute("data-elements", Array.from(ceteicean.els).join(","));
  teiDoc.documentElement.replaceWith(teiData);
  return jdom;
};

const $$Astro$2 = createAstro("https://frankensteinvariorum.github.io");
const $$Tei = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tei;
  let { data, useBehaviors = true } = Astro2.props;
  const jdom = processTei(data);
  const teiString = jdom.serialize();
  const tei = teiString.replace(/<([^\s\/]+)([^>]*?)\/>/gm, "<$1$2></$1>");
  return renderTemplate` ${maybeRenderHead()}<div id="__astrotei"${addAttribute(useBehaviors.toString(), "data-usebehaviors")}>${unescapeHTML(tei)}</div>`;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/node_modules/.pnpm/astro-tei@0.1.0_jsdom@21.1.2/node_modules/astro-tei/src/Tei.astro", void 0);

const $$Astro$1 = createAstro("https://frankensteinvariorum.github.io");
const $$TeiBaseStyle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TeiBaseStyle;
  return renderTemplate``;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/node_modules/.pnpm/astro-tei@0.1.0_jsdom@21.1.2/node_modules/astro-tei/src/TeiBaseStyle.astro", void 0);

const Behavior = ({ children, node }) => {
  if (node.nodeType === 1) {
    const el = node;
    return React.createElement(
      el.tagName,
      {},
      /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "span",
        {
          hidden: true,
          "aria-hidden": true,
          "data-original": true,
          dangerouslySetInnerHTML: { __html: serialize(el) }
        }
      ), children)
    );
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "span",
    {
      hidden: true,
      "aria-hidden": true,
      "data-original": true,
      dangerouslySetInnerHTML: { __html: node.textContent || "" }
    }
  ), children);
};

const forwardAttributes = (atts) => {
  return Array.from(atts).reduce((acc, att) => {
    acc[att.name === "ref" ? "Ref" : att.name] = att.value;
    return acc;
  }, {});
};
const SafeUnchangedNode = (props) => {
  if (props.teiNode.nodeType === 1) {
    const el = props.teiNode;
    return React.createElement(
      el.localName,
      { ...forwardAttributes(el.attributes) },
      /* @__PURE__ */ React.createElement(
        TEINodes,
        {
          teiNodes: el.childNodes,
          availableRoutes: props.availableRoutes
        }
      )
    );
  }
  return /* @__PURE__ */ React.createElement(TEINode, { ...props });
};
const Eg = (props) => {
  let content = serialize(props.teiNode, true);
  let ws = content.match(/^[\t ]+/);
  if (ws) {
    content = content.replace(new RegExp("^" + ws[0], "mg"), "");
  }
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("pre", null, content));
};
const Graphic = (props) => {
  const el = props.teiNode;
  const src = el.getAttribute("url");
  if (!src) {
    return null;
  }
  const imgProps = { src };
  if (el.getAttribute("width")) {
    imgProps.width = el.getAttribute("width") || "";
  }
  if (el.getAttribute("height")) {
    imgProps.height = el.getAttribute("width") || "";
  }
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("img", { ...imgProps }));
};
const List = (props) => {
  const el = props.teiNode;
  if (el.getAttribute("type") !== "gloss") {
    return /* @__PURE__ */ React.createElement(SafeUnchangedNode, { ...props });
  }
  const children = Array.from(el.childNodes);
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("dl", null, children.map((child, i) => {
    if (child.nodeType !== 1) {
      return /* @__PURE__ */ React.createElement(
        TEINode,
        {
          key: `t-${i}`,
          teiNode: child,
          availableRoutes: props.availableRoutes
        }
      );
    }
    const childEl = child;
    switch (childEl.localName) {
      case "tei-label":
        return /* @__PURE__ */ React.createElement("dt", { key: `tt-${i}` }, /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: childEl.childNodes, ...props }));
      case "tei-item":
        return /* @__PURE__ */ React.createElement("dd", { key: `td-${i}` }, /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: childEl.childNodes, ...props }));
    }
  })));
};
const Note$1 = (props) => {
  const el = props.teiNode;
  if (el.getAttribute("place") !== "end") {
    return /* @__PURE__ */ React.createElement(SafeUnchangedNode, { ...props });
  }
  const id = `_note_${el.getAttribute("data-idx")}`;
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("sup", null, /* @__PURE__ */ React.createElement("a", { id: `src${id}`, href: `#${id}` }, el.getAttribute("data-idx"))));
};
const Ptr = (props) => {
  const el = props.teiNode;
  const target = el.getAttribute("target") || "";
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("a", { href: target }, target));
};
const Ref = (props) => {
  const el = props.teiNode;
  const target = el.getAttribute("target") || "";
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("a", { href: target }, /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: el.childNodes, ...props })));
};
const Tei$1 = (props) => {
  const el = props.teiNode;
  const before = [];
  const after = [];
  const endNotes = Array.from(
    el.getElementsByTagName("tei-note")
  ).reduce((acc, note, i) => {
    if (note.getAttribute("place") === "end") {
      note.setAttribute("data-idx", (i + 1).toString());
      const id = `_note_${i + 1}`;
      acc.push(
        /* @__PURE__ */ React.createElement("li", { id, key: id }, /* @__PURE__ */ React.createElement(TEINodes, { key: `en${i}`, teiNodes: note.childNodes, ...props }))
      );
    }
    return acc;
  }, []);
  if (endNotes.length > 0) {
    after.push(
      /* @__PURE__ */ React.createElement("ol", { key: `endnotes-${after.length}`, className: "ceteicean-notes" }, endNotes)
    );
  }
  const content = React.createElement(
    "tei-tei",
    { ...forwardAttributes(el.attributes) },
    /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: props.teiNode.childNodes, ...props })
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, before, content, after);
};
const TeiHeader = (props) => {
  const el = props.teiNode;
  return React.createElement(
    el.localName.toLowerCase(),
    { ...forwardAttributes(el.attributes) },
    /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode })
  );
};

const DefaultBehaviors = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Eg,
	Graphic,
	List,
	Note: Note$1,
	Ptr,
	Ref,
	SafeUnchangedNode,
	Tei: Tei$1,
	TeiHeader,
	forwardAttributes
}, Symbol.toStringTag, { value: 'Module' }));

function BasicRouter({ doc, elements, routes }) {
  useEffect(() => {
    for (const el of elements) {
      defineCustomElement(el);
    }
  });
  const defaultRoutes = {
    "tei-tei": Tei$1,
    "teieg-egxml": Eg,
    "tei-graphic": Graphic,
    "tei-list": List,
    "tei-note": Note$1,
    "tei-ptr": Ptr,
    "tei-ref": Ref,
    "tei-teiheader": TeiHeader
  };
  const _routes = routes ? routes : defaultRoutes;
  const teiRoutes = Object.keys(_routes).map((el, i) => {
    return /* @__PURE__ */ React.createElement(TEIRoute, { el, component: _routes[el], key: `tr-${i}` });
  });
  return /* @__PURE__ */ React.createElement(TEIRender, { data: doc.documentElement }, teiRoutes);
}

const VariantContext = createContext({
  variant: null,
  setVariant: () => console.warn("no variant data provider")
});
const SegContext = createContext({
  seg: null,
  setSeg: () => console.warn("no seg id provider")
});
const MSTargetContext = createContext({
  msTarget: null,
  setMSTarget: () => console.warn("no ms target provider")
});
const ThomasThumbnailContext = createContext({
  thomasThumbnail: null,
  setThomasThumbnail: () => console.warn("no thomas thumbnail provider")
});

const defaultShow = {
  showVariants: true,
  showText: true,
  showNote: true
};
const showState = persistentAtom("showLocale", defaultShow, {
  encode: JSON.stringify,
  decode: JSON.parse
});
const defaultUnitLink = {
  edition: "MS",
  chunk: "C08",
  fMSChp: "box_c56_from_chapter_1",
  f1818Chp: "vol_1_chapter_i",
  fThomasChp: "vol_1_chapter_i",
  f1823Chp: "vol_1_chapter_i",
  f1831Chp: "chapter_ii"
};
const unitLinkState = atom(defaultUnitLink);
const defaultApp = "6";
const appState = persistentAtom("appLocale", defaultApp, {
  encode: JSON.stringify,
  decode: JSON.parse
});
const defaultFont = 1;
persistentAtom("fontLocale", defaultFont, {
  encode: JSON.stringify,
  decode: JSON.parse
});

const linkData = [
	{
		text: "Front cover",
		unit: "front_cover",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/1"
	},
	{
		text: "Inside front cover–front flyleaf recto",
		unit: "1nside_front_cover–front_flyleaf_recto",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/2"
	},
	{
		text: "Front flyleaf verso–p. [i], half-title page, recto",
		unit: "front_flyleaf_verso–p_[i]_half-t1tle_page_recto",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/3"
	},
	{
		text: "p. [ii], half-title page, verso–p. [iii], title page, recto",
		unit: "p_[ii]_half-t1tle_page_verso–p_[iii]_title_page_recto",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/4"
	},
	{
		text: "p. [iv], title page, verso–p. [v] dedication page recto",
		unit: "p_[iv]_t1tle_page_verso–p_[v]_dedication_page_recto",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/5"
	},
	{
		text: "Preface, p. [vii]",
		unit: "preface",
		page: [
			7,
			7
		],
		url: "/collection/frankenstein/6"
	},
	{
		text: "Preface, pp. viii–ix",
		unit: "preface",
		page: [
			8,
			9
		],
		url: "/collection/frankenstein/7"
	},
	{
		text: "Preface, pp. x–xi",
		unit: "preface",
		page: [
			10,
			11
		],
		url: "/collection/frankenstein/8"
	},
	{
		text: "Vol. I, Letter I, p. 1",
		unit: "vol_1_letter_i",
		page: [
			1,
			1
		],
		url: "/collection/frankenstein/9"
	},
	{
		text: "Vol. I, Letter I, pp. 2–3",
		unit: "vol_1_letter_i",
		page: [
			2,
			3
		],
		url: "/collection/frankenstein/10"
	},
	{
		text: "Vol. I, Letter I, pp. 4–5",
		unit: "vol_1_letter_i",
		page: [
			4,
			5
		],
		url: "/collection/frankenstein/11"
	},
	{
		text: "Vol. I, Letter I, pp. 6–7",
		unit: "vol_1_letter_i",
		page: [
			6,
			7
		],
		url: "/collection/frankenstein/12"
	},
	{
		text: "Vol. I, Letter I, pp. 8–9",
		unit: "vol_1_letter_i",
		page: [
			8,
			9
		],
		url: "/collection/frankenstein/13"
	},
	{
		text: "Vol. I, Letter II, pp. 10–11",
		unit: "vol_1_letter_ii",
		page: [
			10,
			11
		],
		url: "/collection/frankenstein/14"
	},
	{
		text: "Vol. I, Letter II, pp. 12–13",
		unit: "vol_1_letter_ii",
		page: [
			12,
			13
		],
		url: "/collection/frankenstein/15"
	},
	{
		text: "Vol. I, Letter II, pp. 14–15",
		unit: "vol_1_letter_ii",
		page: [
			14,
			15
		],
		url: "/collection/frankenstein/16"
	},
	{
		text: "Vol. I, Letter II, pp. 16–17",
		unit: "vol_1_letter_ii",
		page: [
			16,
			17
		],
		url: "/collection/frankenstein/17"
	},
	{
		text: "Vol. I, Letter III, pp. 18–19",
		unit: "vol_1_letter_iii",
		page: [
			18,
			19
		],
		url: "/collection/frankenstein/18"
	},
	{
		text: "Vol. I, Letter IV, pp. 20–21",
		unit: "vol_1_letter_iv",
		page: [
			20,
			21
		],
		url: "/collection/frankenstein/19"
	},
	{
		text: "Vol. I, Letter IV, pp. 22-23",
		unit: "vol_1_letter_iv",
		page: [
			22,
			23
		],
		url: "/collection/frankenstein/20"
	},
	{
		text: "Vol. I, Letter IV, pp. 24–25",
		unit: "vol_1_letter_iv",
		page: [
			24,
			25
		],
		url: "/collection/frankenstein/21"
	},
	{
		text: "Vol. I, Letter IV, pp. 26–27",
		unit: "vol_1_letter_iv",
		page: [
			26,
			27
		],
		url: "/collection/frankenstein/22"
	},
	{
		text: "Vol. I, Letter IV, pp. 28–29",
		unit: "vol_1_letter_iv",
		page: [
			28,
			29
		],
		url: "/collection/frankenstein/23"
	},
	{
		text: "Vol. I, Letter IV, pp. 30–31",
		unit: "vol_1_letter_iv",
		page: [
			30,
			31
		],
		url: "/collection/frankenstein/24"
	},
	{
		text: "Vol. I, Letter IV, pp. 32-33",
		unit: "vol_1_letter_iv",
		page: [
			32,
			33
		],
		url: "/collection/frankenstein/25"
	},
	{
		text: "Vol. I, Letter IV, pp. 34–35",
		unit: "vol_1_letter_iv",
		page: [
			34,
			35
		],
		url: "/collection/frankenstein/26"
	},
	{
		text: "Vol. I, Letter IV, pp. 36–37",
		unit: "vol_1_letter_iv",
		page: [
			36,
			37
		],
		url: "/collection/frankenstein/27"
	},
	{
		text: "Vol. I, Chapter I, pp. 38–39",
		unit: "vol_1_chapter_i",
		page: [
			38,
			39
		],
		url: "/collection/frankenstein/28"
	},
	{
		text: "Vol. I, Chapter I, pp. 40–41",
		unit: "vol_1_chapter_i",
		page: [
			40,
			41
		],
		url: "/collection/frankenstein/29"
	},
	{
		text: "Vol. I, Chapter I, pp. 42–43",
		unit: "vol_1_chapter_i",
		page: [
			42,
			43
		],
		url: "/collection/frankenstein/30"
	},
	{
		text: "Vol. I, Chapter I, pp. 44–45",
		unit: "vol_1_chapter_i",
		page: [
			44,
			45
		],
		url: "/collection/frankenstein/31"
	},
	{
		text: "Vol. I, Chapter I, pp. 46–47",
		unit: "vol_1_chapter_i",
		page: [
			46,
			47
		],
		url: "/collection/frankenstein/32"
	},
	{
		text: "Vol. I, Chapter I, pp. 48–49",
		unit: "vol_1_chapter_i",
		page: [
			48,
			49
		],
		url: "/collection/frankenstein/33"
	},
	{
		text: "Vol. I, Chapter I, pp. 50–51",
		unit: "vol_1_chapter_i",
		page: [
			50,
			51
		],
		url: "/collection/frankenstein/34"
	},
	{
		text: "Vol. I, Chapter I, pp. 52–53",
		unit: "vol_1_chapter_i",
		page: [
			52,
			53
		],
		url: "/collection/frankenstein/35"
	},
	{
		text: "Vol. I, Chapter I, pp. 54–55",
		unit: "vol_1_chapter_i",
		page: [
			54,
			55
		],
		url: "/collection/frankenstein/36"
	},
	{
		text: "Vol. I, Chapter I, pp. 56–57",
		unit: "vol_1_chapter_i",
		page: [
			56,
			57
		],
		url: "/collection/frankenstein/37"
	},
	{
		text: "Vol. I, Chapter I, pp. 58–59",
		unit: "vol_1_chapter_i",
		page: [
			58,
			59
		],
		url: "/collection/frankenstein/38"
	},
	{
		text: "Vol. I, Chapter II, pp. 60–61",
		unit: "vol_1_chapter_ii",
		page: [
			60,
			61
		],
		url: "/collection/frankenstein/39"
	},
	{
		text: "Vol. I, Chapter II, pp. 62–63",
		unit: "vol_1_chapter_ii",
		page: [
			62,
			63
		],
		url: "/collection/frankenstein/40"
	},
	{
		text: "Vol. I, Chapter II, pp. 64–65",
		unit: "vol_1_chapter_ii",
		page: [
			64,
			65
		],
		url: "/collection/frankenstein/41"
	},
	{
		text: "Vol. I, Chapter II, pp. 66–67",
		unit: "vol_1_chapter_ii",
		page: [
			66,
			67
		],
		url: "/collection/frankenstein/42"
	},
	{
		text: "Vol. I, Chapter II, pp. 68–69",
		unit: "vol_1_chapter_ii",
		page: [
			68,
			69
		],
		url: "/collection/frankenstein/43"
	},
	{
		text: "Vol. I, Chapter II, pp. 70–71",
		unit: "vol_1_chapter_ii",
		page: [
			70,
			71
		],
		url: "/collection/frankenstein/44"
	},
	{
		text: "Vol. I, Chapter II, pp. 72–73",
		unit: "vol_1_chapter_ii",
		page: [
			72,
			73
		],
		url: "/collection/frankenstein/45"
	},
	{
		text: "Vol. I, Chapter II, pp. 74–75",
		unit: "vol_1_chapter_ii",
		page: [
			74,
			75
		],
		url: "/collection/frankenstein/46"
	},
	{
		text: "Vol. I, Chapter II, pp. 76–77",
		unit: "vol_1_chapter_ii",
		page: [
			76,
			77
		],
		url: "/collection/frankenstein/47"
	},
	{
		text: "Vol. I, Chapter III, pp. 78–79",
		unit: "vol_1_chapter_iii",
		page: [
			78,
			79
		],
		url: "/collection/frankenstein/48"
	},
	{
		text: "Vol. I, Chapter III, pp. 80–81",
		unit: "vol_1_chapter_iii",
		page: [
			80,
			81
		],
		url: "/collection/frankenstein/49"
	},
	{
		text: "Vol. I, Chapter III, pp. 82–83",
		unit: "vol_1_chapter_iii",
		page: [
			82,
			83
		],
		url: "/collection/frankenstein/50"
	},
	{
		text: "Vol. I, Chapter III, pp. 84–85",
		unit: "vol_1_chapter_iii",
		page: [
			84,
			85
		],
		url: "/collection/frankenstein/51"
	},
	{
		text: "Vol. I, Chapter III, pp. 86–87",
		unit: "vol_1_chapter_iii",
		page: [
			86,
			87
		],
		url: "/collection/frankenstein/52"
	},
	{
		text: "Vol. I, Chapter III, pp. 88–89",
		unit: "vol_1_chapter_iii",
		page: [
			88,
			89
		],
		url: "/collection/frankenstein/53"
	},
	{
		text: "Vol. I, Chapter III, pp. 90–91",
		unit: "vol_1_chapter_iii",
		page: [
			90,
			91
		],
		url: "/collection/frankenstein/54"
	},
	{
		text: "Vol. I, Chapter III, pp. 92–93",
		unit: "vol_1_chapter_iii",
		page: [
			92,
			93
		],
		url: "/collection/frankenstein/55"
	},
	{
		text: "Vol. I, Chapter III, pp. 94–95",
		unit: "vol_1_chapter_iii",
		page: [
			94,
			95
		],
		url: "/collection/frankenstein/56"
	},
	{
		text: "Vol. I, Chapter IV, pp. 96–97",
		unit: "vol_1_chapter_iv",
		page: [
			96,
			97
		],
		url: "/collection/frankenstein/57"
	},
	{
		text: "Vol. I, Chapter IV, pp. 98–99",
		unit: "vol_1_chapter_iv",
		page: [
			98,
			99
		],
		url: "/collection/frankenstein/58"
	},
	{
		text: "Vol. I, Chapter IV, pp. 100–101",
		unit: "vol_1_chapter_iv",
		page: [
			100,
			101
		],
		url: "/collection/frankenstein/59"
	},
	{
		text: "Vol. I, Chapter IV, pp. 102–103",
		unit: "vol_1_chapter_iv",
		page: [
			102,
			103
		],
		url: "/collection/frankenstein/60"
	},
	{
		text: "Vol. I, Chapter IV, pp. 104–105",
		unit: "vol_1_chapter_iv",
		page: [
			104,
			105
		],
		url: "/collection/frankenstein/61"
	},
	{
		text: "Vol. I, Chapter IV, pp. 106–107",
		unit: "vol_1_chapter_iv",
		page: [
			106,
			107
		],
		url: "/collection/frankenstein/62"
	},
	{
		text: "Vol. I, Chapter IV, pp. 108–109",
		unit: "vol_1_chapter_iv",
		page: [
			108,
			109
		],
		url: "/collection/frankenstein/63"
	},
	{
		text: "Vol. I, Chapter IV, pp. 110–111",
		unit: "vol_1_chapter_iv",
		page: [
			110,
			111
		],
		url: "/collection/frankenstein/64"
	},
	{
		text: "Vol. I, Chapter IV, pp. 112–113",
		unit: "vol_1_chapter_iv",
		page: [
			112,
			113
		],
		url: "/collection/frankenstein/65"
	},
	{
		text: "Vol. I, Chapter V, pp. 114–115",
		unit: "vol_1_chapter_v",
		page: [
			114,
			115
		],
		url: "/collection/frankenstein/66"
	},
	{
		text: "Vol. I, Chapter V, pp. 116–117",
		unit: "vol_1_chapter_v",
		page: [
			116,
			117
		],
		url: "/collection/frankenstein/67"
	},
	{
		text: "Vol. I, Chapter V, pp. 118–119",
		unit: "vol_1_chapter_v",
		page: [
			118,
			119
		],
		url: "/collection/frankenstein/68"
	},
	{
		text: "Vol. I, Chapter V, pp. 120–121",
		unit: "vol_1_chapter_v",
		page: [
			120,
			121
		],
		url: "/collection/frankenstein/69"
	},
	{
		text: "Vol. I, Chapter V, pp. 122–123",
		unit: "vol_1_chapter_v",
		page: [
			122,
			123
		],
		url: "/collection/frankenstein/70"
	},
	{
		text: "Vol. I, Chapter V, pp. 124–125",
		unit: "vol_1_chapter_v",
		page: [
			124,
			125
		],
		url: "/collection/frankenstein/71"
	},
	{
		text: "Vol. I, Chapter V, pp. 126–127",
		unit: "vol_1_chapter_v",
		page: [
			126,
			127
		],
		url: "/collection/frankenstein/72"
	},
	{
		text: "Vol. I, Chapter V, pp. 128-129",
		unit: "vol_1_chapter_v",
		page: [
			128,
			129
		],
		url: "/collection/frankenstein/73"
	},
	{
		text: "Vol. I, Chapter V, pp. 130-131",
		unit: "vol_1_chapter_v",
		page: [
			130,
			131
		],
		url: "/collection/frankenstein/74"
	},
	{
		text: "Vol. I, Chapter V, pp. 132–133",
		unit: "vol_1_chapter_v",
		page: [
			132,
			133
		],
		url: "/collection/frankenstein/75"
	},
	{
		text: "Vol. I, Chapter VI, pp. 134–135",
		unit: "vol_1_chapter_vi",
		page: [
			134,
			135
		],
		url: "/collection/frankenstein/76"
	},
	{
		text: "Vol. I, Chapter VI, pp. 136-137",
		unit: "vol_1_chapter_vi",
		page: [
			136,
			137
		],
		url: "/collection/frankenstein/77"
	},
	{
		text: "Vol. I, Chapter VI, pp. 138–139",
		unit: "vol_1_chapter_vi",
		page: [
			138,
			139
		],
		url: "/collection/frankenstein/78"
	},
	{
		text: "Vol. I, Chapter VI, pp. 140–141",
		unit: "vol_1_chapter_vi",
		page: [
			140,
			141
		],
		url: "/collection/frankenstein/79"
	},
	{
		text: "Vol. I, Chapter VI, pp. 142–143",
		unit: "vol_1_chapter_vi",
		page: [
			142,
			143
		],
		url: "/collection/frankenstein/80"
	},
	{
		text: "Vol. I, Chapter VI, pp. 144–145",
		unit: "vol_1_chapter_vi",
		page: [
			144,
			145
		],
		url: "/collection/frankenstein/81"
	},
	{
		text: "Vol. I, Chapter VI, pp. 146-147",
		unit: "vol_1_chapter_vi",
		page: [
			146,
			147
		],
		url: "/collection/frankenstein/82"
	},
	{
		text: "Vol. I, Chapter VI, pp. 148–149",
		unit: "vol_1_chapter_vi",
		page: [
			148,
			149
		],
		url: "/collection/frankenstein/83"
	},
	{
		text: "Vol. I, Chapter VI, pp. 150–151",
		unit: "vol_1_chapter_vi",
		page: [
			150,
			151
		],
		url: "/collection/frankenstein/84"
	},
	{
		text: "Vol. I, Chapter VI, pp. 152–153",
		unit: "vol_1_chapter_vi",
		page: [
			152,
			153
		],
		url: "/collection/frankenstein/85"
	},
	{
		text: "Vol. I, Chapter VI, pp. 154–155",
		unit: "vol_1_chapter_vi",
		page: [
			154,
			155
		],
		url: "/collection/frankenstein/86"
	},
	{
		text: "Vol. I, Chapter VI, pp. 156–157",
		unit: "vol_1_chapter_vi",
		page: [
			156,
			157
		],
		url: "/collection/frankenstein/87"
	},
	{
		text: "Vol. I, Chapter VI, pp. 158–159",
		unit: "vol_1_chapter_vi",
		page: [
			158,
			159
		],
		url: "/collection/frankenstein/88"
	},
	{
		text: "Vol. I, Chapter VII, pp. 160–161",
		unit: "vol_1_chapter_vii",
		page: [
			160,
			161
		],
		url: "/collection/frankenstein/89"
	},
	{
		text: "Vol. I, Chapter VII, pp. 162–163",
		unit: "vol_1_chapter_vii",
		page: [
			162,
			163
		],
		url: "/collection/frankenstein/90"
	},
	{
		text: "Vol. I, Chapter VII, pp. 164–165",
		unit: "vol_1_chapter_vii",
		page: [
			164,
			165
		],
		url: "/collection/frankenstein/91"
	},
	{
		text: "Vol. I, Chapter VII, pp. 166–167",
		unit: "vol_1_chapter_vii",
		page: [
			166,
			167
		],
		url: "/collection/frankenstein/92"
	},
	{
		text: "Vol. I, Chapter VII, pp. 168–169",
		unit: "vol_1_chapter_vii",
		page: [
			168,
			169
		],
		url: "/collection/frankenstein/93"
	},
	{
		text: "Vol. I, Chapter VII, pp. 170–171",
		unit: "vol_1_chapter_vii",
		page: [
			170,
			171
		],
		url: "/collection/frankenstein/94"
	},
	{
		text: "Vol. I, Chapter VII, pp. 172–173",
		unit: "vol_1_chapter_vii",
		page: [
			172,
			173
		],
		url: "/collection/frankenstein/95"
	},
	{
		text: "Vol. I, Chapter VII, pp. 174–175",
		unit: "vol_1_chapter_vii",
		page: [
			174,
			175
		],
		url: "/collection/frankenstein/96"
	},
	{
		text: "Vol. I, Chapter VII, pp. 176–177",
		unit: "vol_1_chapter_vii",
		page: [
			176,
			177
		],
		url: "/collection/frankenstein/97"
	},
	{
		text: "Vol. I, Chapter VII, pp. 178–179",
		unit: "vol_1_chapter_vii",
		page: [
			178,
			179
		],
		url: "/collection/frankenstein/98"
	},
	{
		text: "Vol. I, Chapter VII, pp. 180–181",
		unit: "vol_1_chapter_vii",
		page: [
			180,
			181
		],
		url: "/collection/frankenstein/99"
	},
	{
		text: "Vol. II, p. [i]",
		unit: "vol_1i",
		page: [
			1,
			1
		],
		url: "/collection/frankenstein/100"
	},
	{
		text: "Vol. II p. [ii] Half title page verso–p. [iii] Title page recto",
		unit: "vol_2_p_[ii]_half_title_page_verso–p_[iii]_title_page_recto",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/101"
	},
	{
		text: "Vol. II, p. [iv] Title page verso–p. 1",
		unit: "vol_1i",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/102"
	},
	{
		text: "Vol. II, Chapter I, pp. 2–3",
		unit: "vol_2_chapter_i",
		page: [
			2,
			3
		],
		url: "/collection/frankenstein/103"
	},
	{
		text: "Vol. II, Chapter I, pp. 4–5",
		unit: "vol_2_chapter_i",
		page: [
			4,
			5
		],
		url: "/collection/frankenstein/104"
	},
	{
		text: "Vol. II, Chapter I, pp. 6–7",
		unit: "vol_2_chapter_i",
		page: [
			6,
			7
		],
		url: "/collection/frankenstein/105"
	},
	{
		text: "Vol. II, Chapter I, pp. 8–9",
		unit: "vol_2_chapter_i",
		page: [
			8,
			9
		],
		url: "/collection/frankenstein/106"
	},
	{
		text: "Vol. II, Chapter I, pp. 10–11",
		unit: "vol_2_chapter_i",
		page: [
			10,
			11
		],
		url: "/collection/frankenstein/107"
	},
	{
		text: "Vol. II, Chapter I, pp. 12–13",
		unit: "vol_2_chapter_i",
		page: [
			12,
			13
		],
		url: "/collection/frankenstein/108"
	},
	{
		text: "Vol. II, Chapter I, pp. 14–15",
		unit: "vol_2_chapter_i",
		page: [
			14,
			15
		],
		url: "/collection/frankenstein/109"
	},
	{
		text: "Vol. II, Chapter II, pp. 16–17",
		unit: "vol_2_chapter_ii",
		page: [
			16,
			17
		],
		url: "/collection/frankenstein/110"
	},
	{
		text: "Vol. II, Chapter II, pp. 18–19",
		unit: "vol_2_chapter_ii",
		page: [
			18,
			19
		],
		url: "/collection/frankenstein/111"
	},
	{
		text: "Vol. II, Chapter II, pp. 20–21",
		unit: "vol_2_chapter_ii",
		page: [
			20,
			21
		],
		url: "/collection/frankenstein/112"
	},
	{
		text: "Vol. II, Chapter II, pp. 22–23",
		unit: "vol_2_chapter_ii",
		page: [
			22,
			23
		],
		url: "/collection/frankenstein/113"
	},
	{
		text: "Vol. II, Chapter II, pp. 24–25",
		unit: "vol_2_chapter_ii",
		page: [
			24,
			25
		],
		url: "/collection/frankenstein/114"
	},
	{
		text: "Vol. II, Chapter II, pp. 26–27",
		unit: "vol_2_chapter_ii",
		page: [
			26,
			27
		],
		url: "/collection/frankenstein/115"
	},
	{
		text: "Vol. II, Chapter II, pp. 28–29",
		unit: "vol_2_chapter_ii",
		page: [
			28,
			29
		],
		url: "/collection/frankenstein/116"
	},
	{
		text: "Vol. II, Chapter II, pp. 30–31",
		unit: "vol_2_chapter_ii",
		page: [
			30,
			31
		],
		url: "/collection/frankenstein/117"
	},
	{
		text: "Vol. II, Chapter III, pp. 32–33",
		unit: "vol_2_chapter_iii",
		page: [
			32,
			33
		],
		url: "/collection/frankenstein/118"
	},
	{
		text: "Vol. II, Chapter III, pp. 34–35",
		unit: "vol_2_chapter_iii",
		page: [
			34,
			35
		],
		url: "/collection/frankenstein/119"
	},
	{
		text: "Vol. II, Chapter III, pp. 36–37",
		unit: "vol_2_chapter_iii",
		page: [
			36,
			37
		],
		url: "/collection/frankenstein/120"
	},
	{
		text: "Vol. II, Chapter III, pp. 38–39",
		unit: "vol_2_chapter_iii",
		page: [
			38,
			39
		],
		url: "/collection/frankenstein/121"
	},
	{
		text: "Vol. II, Chapter III, pp. 40–41",
		unit: "vol_2_chapter_iii",
		page: [
			40,
			41
		],
		url: "/collection/frankenstein/122"
	},
	{
		text: "Vol. II, Chapter III, pp. 42–43",
		unit: "vol_2_chapter_iii",
		page: [
			42,
			43
		],
		url: "/collection/frankenstein/123"
	},
	{
		text: "Vol. II, Chapter III, pp. 44–45",
		unit: "vol_2_chapter_iii",
		page: [
			44,
			45
		],
		url: "/collection/frankenstein/124"
	},
	{
		text: "Vol. II, Chapter III, pp. 46-47",
		unit: "vol_2_chapter_iii",
		page: [
			46,
			47
		],
		url: "/collection/frankenstein/125"
	},
	{
		text: "Vol. II, Chapter III, pp. 48–49",
		unit: "vol_2_chapter_iii",
		page: [
			48,
			49
		],
		url: "/collection/frankenstein/126"
	},
	{
		text: "Vol. II, Chapter III, pp. 50–51",
		unit: "vol_2_chapter_iii",
		page: [
			50,
			51
		],
		url: "/collection/frankenstein/127"
	},
	{
		text: "Vol. II, Chapter IV, pp. 52–53",
		unit: "vol_2_chapter_iv",
		page: [
			52,
			53
		],
		url: "/collection/frankenstein/128"
	},
	{
		text: "Vol. II, Chapter IV, pp. 54–55",
		unit: "vol_2_chapter_iv",
		page: [
			54,
			55
		],
		url: "/collection/frankenstein/129"
	},
	{
		text: "Vol. II, Chapter IV, pp. 56–57",
		unit: "vol_2_chapter_iv",
		page: [
			56,
			57
		],
		url: "/collection/frankenstein/130"
	},
	{
		text: "Vol. II, Chapter IV, pp. 58–59",
		unit: "vol_2_chapter_iv",
		page: [
			58,
			59
		],
		url: "/collection/frankenstein/131"
	},
	{
		text: "Vol. II, Chapter IV, pp. 60–61",
		unit: "vol_2_chapter_iv",
		page: [
			60,
			61
		],
		url: "/collection/frankenstein/132"
	},
	{
		text: "Vol. II, Chapter IV, pp. 62–63",
		unit: "vol_2_chapter_iv",
		page: [
			62,
			63
		],
		url: "/collection/frankenstein/133"
	},
	{
		text: "Vol. II, Chapter IV, pp. 64–65",
		unit: "vol_2_chapter_iv",
		page: [
			64,
			65
		],
		url: "/collection/frankenstein/134"
	},
	{
		text: "Vol. II, Chapter IV, pp. 66–67",
		unit: "vol_2_chapter_iv",
		page: [
			66,
			67
		],
		url: "/collection/frankenstein/135"
	},
	{
		text: "Vol. II, Chapter V, pp. 68–69",
		unit: "vol_2_chapter_v",
		page: [
			68,
			69
		],
		url: "/collection/frankenstein/136"
	},
	{
		text: "Vol. II, Chapter V, pp. 70–71",
		unit: "vol_2_chapter_v",
		page: [
			70,
			71
		],
		url: "/collection/frankenstein/137"
	},
	{
		text: "Vol. II, Chapter V, pp. 72-73",
		unit: "vol_2_chapter_v",
		page: [
			72,
			73
		],
		url: "/collection/frankenstein/138"
	},
	{
		text: "Vol. II, Chapter V, pp. 74–75",
		unit: "vol_2_chapter_v",
		page: [
			74,
			75
		],
		url: "/collection/frankenstein/139"
	},
	{
		text: "Vol. II, Chapter V, pp. 76–77",
		unit: "vol_2_chapter_v",
		page: [
			76,
			77
		],
		url: "/collection/frankenstein/140"
	},
	{
		text: "Vol. II, Chapter V, pp. 78–79",
		unit: "vol_2_chapter_v",
		page: [
			78,
			79
		],
		url: "/collection/frankenstein/141"
	},
	{
		text: "Vol. II, Chapter V, pp. 80–81",
		unit: "vol_2_chapter_v",
		page: [
			80,
			81
		],
		url: "/collection/frankenstein/142"
	},
	{
		text: "Vol. II, Chapter V, pp. 82–83",
		unit: "vol_2_chapter_v",
		page: [
			82,
			83
		],
		url: "/collection/frankenstein/143"
	},
	{
		text: "Vol. II, Chapter VI, pp. 84–85",
		unit: "vol_2_chapter_vi",
		page: [
			84,
			85
		],
		url: "/collection/frankenstein/144"
	},
	{
		text: "Vol. II, Chapter VI, pp. 86–87",
		unit: "vol_2_chapter_vi",
		page: [
			86,
			87
		],
		url: "/collection/frankenstein/145"
	},
	{
		text: "Vol. II, Chapter VI, pp. 88–89",
		unit: "vol_2_chapter_vi",
		page: [
			88,
			89
		],
		url: "/collection/frankenstein/146"
	},
	{
		text: "Vol. II, Chapter VI, pp. 90–91",
		unit: "vol_2_chapter_vi",
		page: [
			90,
			91
		],
		url: "/collection/frankenstein/147"
	},
	{
		text: "Vol. II, Chapter VI, pp. 92–93",
		unit: "vol_2_chapter_vi",
		page: [
			92,
			93
		],
		url: "/collection/frankenstein/148"
	},
	{
		text: "Vol. II, Chapter VI, pp. 94–95",
		unit: "vol_2_chapter_vi",
		page: [
			94,
			95
		],
		url: "/collection/frankenstein/149"
	},
	{
		text: "Vol. II, Chapter VI, pp. 96–97",
		unit: "vol_2_chapter_vi",
		page: [
			96,
			97
		],
		url: "/collection/frankenstein/150"
	},
	{
		text: "Vol. II, Chapter VII, pp. 98–99",
		unit: "vol_2_chapter_vii",
		page: [
			98,
			99
		],
		url: "/collection/frankenstein/151"
	},
	{
		text: "Vol. II, Chapter VII, pp. 100–101",
		unit: "vol_2_chapter_vii",
		page: [
			100,
			101
		],
		url: "/collection/frankenstein/152"
	},
	{
		text: "Vol. II, Chapter VII, pp. 102–103",
		unit: "vol_2_chapter_vii",
		page: [
			102,
			103
		],
		url: "/collection/frankenstein/153"
	},
	{
		text: "Vol. II, Chapter VII, pp. 104–105",
		unit: "vol_2_chapter_vii",
		page: [
			104,
			105
		],
		url: "/collection/frankenstein/154"
	},
	{
		text: "Vol. II, Chapter VII, pp. 106–107",
		unit: "vol_2_chapter_vii",
		page: [
			106,
			107
		],
		url: "/collection/frankenstein/155"
	},
	{
		text: "Vol. II, Chapter VII, pp. 108–109",
		unit: "vol_2_chapter_vii",
		page: [
			108,
			109
		],
		url: "/collection/frankenstein/156"
	},
	{
		text: "Vol. II, Chapter VII, pp. 110–111",
		unit: "vol_2_chapter_vii",
		page: [
			110,
			111
		],
		url: "/collection/frankenstein/157"
	},
	{
		text: "Vol. II, Chapter VII, pp. 112–113",
		unit: "vol_2_chapter_vii",
		page: [
			112,
			113
		],
		url: "/collection/frankenstein/158"
	},
	{
		text: "Vol. II, Chapter VII, pp. 114–115",
		unit: "vol_2_chapter_vii",
		page: [
			114,
			115
		],
		url: "/collection/frankenstein/159"
	},
	{
		text: "Vol. II, Chapter VII, pp. 116–117",
		unit: "vol_2_chapter_vii",
		page: [
			116,
			117
		],
		url: "/collection/frankenstein/160"
	},
	{
		text: "Vol. II, Chapter VII, pp. 118–119",
		unit: "vol_2_chapter_vii",
		page: [
			118,
			119
		],
		url: "/collection/frankenstein/161"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 120–121",
		unit: "vol_2_chapter_viii",
		page: [
			120,
			121
		],
		url: "/collection/frankenstein/162"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 122–123",
		unit: "vol_2_chapter_viii",
		page: [
			122,
			123
		],
		url: "/collection/frankenstein/163"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 124–125",
		unit: "vol_2_chapter_viii",
		page: [
			124,
			125
		],
		url: "/collection/frankenstein/164"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 126–127",
		unit: "vol_2_chapter_viii",
		page: [
			126,
			127
		],
		url: "/collection/frankenstein/165"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 128–129",
		unit: "vol_2_chapter_viii",
		page: [
			128,
			129
		],
		url: "/collection/frankenstein/166"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 130–131",
		unit: "vol_2_chapter_viii",
		page: [
			130,
			131
		],
		url: "/collection/frankenstein/167"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 132–133",
		unit: "vol_2_chapter_viii",
		page: [
			132,
			133
		],
		url: "/collection/frankenstein/168"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 134–135",
		unit: "vol_2_chapter_viii",
		page: [
			134,
			135
		],
		url: "/collection/frankenstein/169"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 136–137",
		unit: "vol_2_chapter_viii",
		page: [
			136,
			137
		],
		url: "/collection/frankenstein/170"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 138–139",
		unit: "vol_2_chapter_viii",
		page: [
			138,
			139
		],
		url: "/collection/frankenstein/171"
	},
	{
		text: "Vol. II, Chapter VIII, pp. 140–141",
		unit: "vol_2_chapter_viii",
		page: [
			140,
			141
		],
		url: "/collection/frankenstein/172"
	},
	{
		text: "Vol. II, Chapter IX, pp. 142–143",
		unit: "vol_2_chapter_ix",
		page: [
			142,
			143
		],
		url: "/collection/frankenstein/173"
	},
	{
		text: "Vol. II, Chapter IX, pp. 144–145",
		unit: "vol_2_chapter_ix",
		page: [
			144,
			145
		],
		url: "/collection/frankenstein/174"
	},
	{
		text: "Vol. II, Chapter IX, pp. 146–147",
		unit: "vol_2_chapter_ix",
		page: [
			146,
			147
		],
		url: "/collection/frankenstein/175"
	},
	{
		text: "Vol. II, Chapter IX, pp. 148–149",
		unit: "vol_2_chapter_ix",
		page: [
			148,
			149
		],
		url: "/collection/frankenstein/176"
	},
	{
		text: "Vol. II, Chapter IX, pp. 150–151",
		unit: "vol_2_chapter_ix",
		page: [
			150,
			151
		],
		url: "/collection/frankenstein/177"
	},
	{
		text: "Vol. II, Chapter IX, pp. 152–153",
		unit: "vol_2_chapter_ix",
		page: [
			152,
			153
		],
		url: "/collection/frankenstein/178"
	},
	{
		text: "Vol. II, Chapter IX, pp. 154–155",
		unit: "vol_2_chapter_ix",
		page: [
			154,
			155
		],
		url: "/collection/frankenstein/179"
	},
	{
		text: "Vol. III, p. [i]",
		unit: "vol_2i",
		page: [
			1,
			1
		],
		url: "/collection/frankenstein/180"
	},
	{
		text: "Vol. III, p. [ii] Half-title page verso–p. [iii] Title page recto",
		unit: "vol_2i",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/181"
	},
	{
		text: "Vol. III, p. [iv] Title page verso–Chapter I, p. 1",
		unit: "vol_2i",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/182"
	},
	{
		text: "Vol. III, Chapter I, pp. 2–3",
		unit: "vol_3_chapter_i",
		page: [
			2,
			3
		],
		url: "/collection/frankenstein/183"
	},
	{
		text: "Vol. III, Chapter I, pp. 4–5",
		unit: "vol_3_chapter_i",
		page: [
			4,
			5
		],
		url: "/collection/frankenstein/184"
	},
	{
		text: "Vol. III, Chapter I, pp. 6–7",
		unit: "vol_3_chapter_i",
		page: [
			6,
			7
		],
		url: "/collection/frankenstein/185"
	},
	{
		text: "Vol. III, Chapter I, pp. 8–9",
		unit: "vol_3_chapter_i",
		page: [
			8,
			9
		],
		url: "/collection/frankenstein/186"
	},
	{
		text: "Vol. III, Chapter I, pp. 10–11",
		unit: "vol_3_chapter_i",
		page: [
			10,
			11
		],
		url: "/collection/frankenstein/187"
	},
	{
		text: "Vol. III, Chapter I, pp. 12–13",
		unit: "vol_3_chapter_i",
		page: [
			12,
			13
		],
		url: "/collection/frankenstein/188"
	},
	{
		text: "Vol. III, Chapter I, pp. 14–15",
		unit: "vol_3_chapter_i",
		page: [
			14,
			15
		],
		url: "/collection/frankenstein/189"
	},
	{
		text: "Vol. III, Chapter I, pp. 16–17",
		unit: "vol_3_chapter_i",
		page: [
			16,
			17
		],
		url: "/collection/frankenstein/190"
	},
	{
		text: "Vol. III, Chapter I, pp. 18–19",
		unit: "vol_3_chapter_i",
		page: [
			18,
			19
		],
		url: "/collection/frankenstein/191"
	},
	{
		text: "Vol. III, Chapter II, pp. 20–21",
		unit: "vol_3_chapter_ii",
		page: [
			20,
			21
		],
		url: "/collection/frankenstein/192"
	},
	{
		text: "Vol. III, Chapter II, pp. 22–23",
		unit: "vol_3_chapter_ii",
		page: [
			22,
			23
		],
		url: "/collection/frankenstein/193"
	},
	{
		text: "Vol. III, Chapter II, pp. 24–25",
		unit: "vol_3_chapter_ii",
		page: [
			24,
			25
		],
		url: "/collection/frankenstein/194"
	},
	{
		text: "Vol. III, Chapter II, pp. 26–27",
		unit: "vol_3_chapter_ii",
		page: [
			26,
			27
		],
		url: "/collection/frankenstein/195"
	},
	{
		text: "Vol. III, Chapter II, pp. 28–29",
		unit: "vol_3_chapter_ii",
		page: [
			28,
			29
		],
		url: "/collection/frankenstein/196"
	},
	{
		text: "Vol. III, Chapter II, pp. 30–31",
		unit: "vol_3_chapter_ii",
		page: [
			30,
			31
		],
		url: "/collection/frankenstein/197"
	},
	{
		text: "Vol. III, Chapter II, pp. 32–33",
		unit: "vol_3_chapter_ii",
		page: [
			32,
			33
		],
		url: "/collection/frankenstein/198"
	},
	{
		text: "Vol. III, Chapter II, pp. 34–35",
		unit: "vol_3_chapter_ii",
		page: [
			34,
			35
		],
		url: "/collection/frankenstein/199"
	},
	{
		text: "Vol. III, Chapter II, pp. 36–37",
		unit: "vol_3_chapter_ii",
		page: [
			36,
			37
		],
		url: "/collection/frankenstein/200"
	},
	{
		text: "Vol. III, Chapter II, pp. 38–39",
		unit: "vol_3_chapter_ii",
		page: [
			38,
			39
		],
		url: "/collection/frankenstein/201"
	},
	{
		text: "Vol. III, Chapter III, pp. 40–41",
		unit: "vol_3_chapter_iii",
		page: [
			40,
			41
		],
		url: "/collection/frankenstein/202"
	},
	{
		text: "Vol. III, Chapter III, pp. 42–43",
		unit: "vol_3_chapter_iii",
		page: [
			42,
			43
		],
		url: "/collection/frankenstein/203"
	},
	{
		text: "Vol. III, Chapter III, pp. 44–45",
		unit: "vol_3_chapter_iii",
		page: [
			44,
			45
		],
		url: "/collection/frankenstein/204"
	},
	{
		text: "Vol. III, Chapter III, pp. 46–47",
		unit: "vol_3_chapter_iii",
		page: [
			46,
			47
		],
		url: "/collection/frankenstein/205"
	},
	{
		text: "Vol. III, Chapter III, pp. 48–49",
		unit: "vol_3_chapter_iii",
		page: [
			48,
			49
		],
		url: "/collection/frankenstein/206"
	},
	{
		text: "Vol. III, Chapter III, pp. 50–51",
		unit: "vol_3_chapter_iii",
		page: [
			50,
			51
		],
		url: "/collection/frankenstein/207"
	},
	{
		text: "Vol. III, Chapter III, pp. 52–53",
		unit: "vol_3_chapter_iii",
		page: [
			52,
			53
		],
		url: "/collection/frankenstein/208"
	},
	{
		text: "Vol. III, Chapter III, pp. 54–55",
		unit: "vol_3_chapter_iii",
		page: [
			54,
			55
		],
		url: "/collection/frankenstein/209"
	},
	{
		text: "Vol. III, Chapter III, pp. 56–57",
		unit: "vol_3_chapter_iii",
		page: [
			56,
			57
		],
		url: "/collection/frankenstein/210"
	},
	{
		text: "Vol. III, Chapter III, pp. 58–59",
		unit: "vol_3_chapter_iii",
		page: [
			58,
			59
		],
		url: "/collection/frankenstein/211"
	},
	{
		text: "Vol. III, Chapter III, pp. 60–61",
		unit: "vol_3_chapter_iii",
		page: [
			60,
			61
		],
		url: "/collection/frankenstein/212"
	},
	{
		text: "Vol. III, Chapter III, pp. 62–63",
		unit: "vol_3_chapter_iii",
		page: [
			62,
			63
		],
		url: "/collection/frankenstein/213"
	},
	{
		text: "Vol. III, Chapter IV, pp. 64–65",
		unit: "vol_3_chapter_iv",
		page: [
			64,
			65
		],
		url: "/collection/frankenstein/214"
	},
	{
		text: "Vol. III, Chapter IV, pp. 66–67",
		unit: "vol_3_chapter_iv",
		page: [
			66,
			67
		],
		url: "/collection/frankenstein/215"
	},
	{
		text: "Vol. III, Chapter IV, pp. 68–69",
		unit: "vol_3_chapter_iv",
		page: [
			68,
			69
		],
		url: "/collection/frankenstein/216"
	},
	{
		text: "Vol. III, Chapter IV, pp. 70–71",
		unit: "vol_3_chapter_iv",
		page: [
			70,
			71
		],
		url: "/collection/frankenstein/217"
	},
	{
		text: "Vol. III, Chapter IV, pp. 72–73",
		unit: "vol_3_chapter_iv",
		page: [
			72,
			73
		],
		url: "/collection/frankenstein/218"
	},
	{
		text: "Vol. III, Chapter IV, pp. 74–75",
		unit: "vol_3_chapter_iv",
		page: [
			74,
			75
		],
		url: "/collection/frankenstein/219"
	},
	{
		text: "Vol. III, Chapter IV, pp. 76–77",
		unit: "vol_3_chapter_iv",
		page: [
			76,
			77
		],
		url: "/collection/frankenstein/220"
	},
	{
		text: "Vol. III, Chapter IV, pp. 78–79",
		unit: "vol_3_chapter_iv",
		page: [
			78,
			79
		],
		url: "/collection/frankenstein/221"
	},
	{
		text: "Vol. III, Chapter IV, pp. 80–81",
		unit: "vol_3_chapter_iv",
		page: [
			80,
			81
		],
		url: "/collection/frankenstein/222"
	},
	{
		text: "Vol. III, Chapter IV, pp. 82–83",
		unit: "vol_3_chapter_iv",
		page: [
			82,
			83
		],
		url: "/collection/frankenstein/223"
	},
	{
		text: "Vol. III, Chapter IV, pp. 84–85",
		unit: "vol_3_chapter_iv",
		page: [
			84,
			85
		],
		url: "/collection/frankenstein/224"
	},
	{
		text: "Vol. III, Chapter IV, pp. 86–87",
		unit: "vol_3_chapter_iv",
		page: [
			86,
			87
		],
		url: "/collection/frankenstein/225"
	},
	{
		text: "Vol. III, Chapter IV, pp. 88–89",
		unit: "vol_3_chapter_iv",
		page: [
			88,
			89
		],
		url: "/collection/frankenstein/226"
	},
	{
		text: "Vol. III, Chapter V, pp. 90–91",
		unit: "vol_3_chapter_v",
		page: [
			90,
			91
		],
		url: "/collection/frankenstein/227"
	},
	{
		text: "Vol. III, Chapter V, pp. 92–93",
		unit: "vol_3_chapter_v",
		page: [
			92,
			93
		],
		url: "/collection/frankenstein/228"
	},
	{
		text: "Vol. III, Chapter V, pp. 94–95",
		unit: "vol_3_chapter_v",
		page: [
			94,
			95
		],
		url: "/collection/frankenstein/229"
	},
	{
		text: "Vol. III, Chapter V, pp. 96–97",
		unit: "vol_3_chapter_v",
		page: [
			96,
			97
		],
		url: "/collection/frankenstein/230"
	},
	{
		text: "Vol. III, Chapter V, pp. 98–99",
		unit: "vol_3_chapter_v",
		page: [
			98,
			99
		],
		url: "/collection/frankenstein/231"
	},
	{
		text: "Vol. III, Chapter V, pp. 100–101",
		unit: "vol_3_chapter_v",
		page: [
			100,
			101
		],
		url: "/collection/frankenstein/232"
	},
	{
		text: "Vol. III, Chapter V, pp. 102–103",
		unit: "vol_3_chapter_v",
		page: [
			102,
			103
		],
		url: "/collection/frankenstein/233"
	},
	{
		text: "Vol. III, Chapter V, pp. 104–105",
		unit: "vol_3_chapter_v",
		page: [
			104,
			105
		],
		url: "/collection/frankenstein/234"
	},
	{
		text: "Vol. III, Chapter V, pp. 106–107",
		unit: "vol_3_chapter_v",
		page: [
			106,
			107
		],
		url: "/collection/frankenstein/235"
	},
	{
		text: "Vol. III, Chapter V, pp. 108–109",
		unit: "vol_3_chapter_v",
		page: [
			108,
			109
		],
		url: "/collection/frankenstein/236"
	},
	{
		text: "Vol. III, Chapter V, pp. 110–111",
		unit: "vol_3_chapter_v",
		page: [
			110,
			111
		],
		url: "/collection/frankenstein/237"
	},
	{
		text: "Vol. III, Chapter V, pp. 112–113",
		unit: "vol_3_chapter_v",
		page: [
			112,
			113
		],
		url: "/collection/frankenstein/238"
	},
	{
		text: "Vol. III, Chapter V, pp. 114–115",
		unit: "vol_3_chapter_v",
		page: [
			114,
			115
		],
		url: "/collection/frankenstein/239"
	},
	{
		text: "Vol. III, Chapter VI, pp. 116–117",
		unit: "vol_3_chapter_vi",
		page: [
			116,
			117
		],
		url: "/collection/frankenstein/240"
	},
	{
		text: "Vol. III, Chapter VI, pp. 118–119",
		unit: "vol_3_chapter_vi",
		page: [
			118,
			119
		],
		url: "/collection/frankenstein/241"
	},
	{
		text: "Vol. III, Chapter VI, pp. 120–121",
		unit: "vol_3_chapter_vi",
		page: [
			120,
			121
		],
		url: "/collection/frankenstein/242"
	},
	{
		text: "Vol. III, Chapter VI, pp. 122–123",
		unit: "vol_3_chapter_vi",
		page: [
			122,
			123
		],
		url: "/collection/frankenstein/243"
	},
	{
		text: "Vol. III, Chapter VI, pp. 124–125",
		unit: "vol_3_chapter_vi",
		page: [
			124,
			125
		],
		url: "/collection/frankenstein/244"
	},
	{
		text: "Vol. III, Chapter VI, pp. 126–127",
		unit: "vol_3_chapter_vi",
		page: [
			126,
			127
		],
		url: "/collection/frankenstein/245"
	},
	{
		text: "Vol. III, Chapter VI, pp. 128–129",
		unit: "vol_3_chapter_vi",
		page: [
			128,
			129
		],
		url: "/collection/frankenstein/246"
	},
	{
		text: "Vol. III, Chapter VI, pp. 130–131",
		unit: "vol_3_chapter_vi",
		page: [
			130,
			131
		],
		url: "/collection/frankenstein/247"
	},
	{
		text: "Vol. III, Chapter VI, pp. 132–133",
		unit: "vol_3_chapter_vi",
		page: [
			132,
			133
		],
		url: "/collection/frankenstein/248"
	},
	{
		text: "Vol. III, Chapter VII, pp. 134–135",
		unit: "vol_3_chapter_vii",
		page: [
			134,
			135
		],
		url: "/collection/frankenstein/249"
	},
	{
		text: "Vol. III, Chapter VII, pp. 136–137",
		unit: "vol_3_chapter_vii",
		page: [
			136,
			137
		],
		url: "/collection/frankenstein/250"
	},
	{
		text: "Vol. III, Chapter VII, pp. 138–139",
		unit: "vol_3_chapter_vii",
		page: [
			138,
			139
		],
		url: "/collection/frankenstein/251"
	},
	{
		text: "Vol. III, Chapter VII, pp. 140–141",
		unit: "vol_3_chapter_vii",
		page: [
			140,
			141
		],
		url: "/collection/frankenstein/252"
	},
	{
		text: "Vol. III, Chapter VII, pp. 142–143",
		unit: "vol_3_chapter_vii",
		page: [
			142,
			143
		],
		url: "/collection/frankenstein/253"
	},
	{
		text: "Vol. III, Chapter VII, pp. 144–145",
		unit: "vol_3_chapter_vii",
		page: [
			144,
			145
		],
		url: "/collection/frankenstein/254"
	},
	{
		text: "Vol. III, Chapter VII, pp. 146–147",
		unit: "vol_3_chapter_vii",
		page: [
			146,
			147
		],
		url: "/collection/frankenstein/255"
	},
	{
		text: "Vol. III, Chapter VII, pp. 148–149",
		unit: "vol_3_chapter_vii",
		page: [
			148,
			149
		],
		url: "/collection/frankenstein/256"
	},
	{
		text: "Vol. III, Chapter VII, pp. 150–151",
		unit: "vol_3_chapter_vii",
		page: [
			150,
			151
		],
		url: "/collection/frankenstein/257"
	},
	{
		text: "Vol. III, Chapter VII, pp. 152–153",
		unit: "vol_3_chapter_vii",
		page: [
			152,
			153
		],
		url: "/collection/frankenstein/258"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 154–155",
		unit: "vol_3_walton_in_continuation",
		page: [
			154,
			155
		],
		url: "/collection/frankenstein/259"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 156–157",
		unit: "vol_3_walton_in_continuation",
		page: [
			156,
			157
		],
		url: "/collection/frankenstein/260"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 158–159",
		unit: "vol_3_walton_in_continuation",
		page: [
			158,
			159
		],
		url: "/collection/frankenstein/261"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 160–161",
		unit: "vol_3_walton_in_continuation",
		page: [
			160,
			161
		],
		url: "/collection/frankenstein/262"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 162–163",
		unit: "vol_3_walton_in_continuation",
		page: [
			162,
			163
		],
		url: "/collection/frankenstein/263"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 164–165",
		unit: "vol_3_walton_in_continuation",
		page: [
			164,
			165
		],
		url: "/collection/frankenstein/264"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 166–167",
		unit: "vol_3_walton_in_continuation",
		page: [
			166,
			167
		],
		url: "/collection/frankenstein/265"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 168–169",
		unit: "vol_3_walton_in_continuation",
		page: [
			168,
			169
		],
		url: "/collection/frankenstein/266"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 170–171",
		unit: "vol_3_walton_in_continuation",
		page: [
			170,
			171
		],
		url: "/collection/frankenstein/267"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 172–173",
		unit: "vol_3_walton_in_continuation",
		page: [
			172,
			173
		],
		url: "/collection/frankenstein/268"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 174–175",
		unit: "vol_3_walton_in_continuation",
		page: [
			174,
			175
		],
		url: "/collection/frankenstein/269"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 176–177",
		unit: "vol_3_walton_in_continuation",
		page: [
			176,
			177
		],
		url: "/collection/frankenstein/270"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 178–179",
		unit: "vol_3_walton_in_continuation",
		page: [
			178,
			179
		],
		url: "/collection/frankenstein/271"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 180–181",
		unit: "vol_3_walton_in_continuation",
		page: [
			180,
			181
		],
		url: "/collection/frankenstein/272"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 182–183",
		unit: "vol_3_walton_in_continuation",
		page: [
			182,
			183
		],
		url: "/collection/frankenstein/273"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 184–185",
		unit: "vol_3_walton_in_continuation",
		page: [
			184,
			185
		],
		url: "/collection/frankenstein/274"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 186–187",
		unit: "vol_3_walton_in_continuation",
		page: [
			186,
			187
		],
		url: "/collection/frankenstein/275"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 188–189",
		unit: "vol_3_walton_in_continuation",
		page: [
			188,
			189
		],
		url: "/collection/frankenstein/276"
	},
	{
		text: "Vol. III, Walton, in continuation, pp. 190–191",
		unit: "vol_3_walton_in_continuation",
		page: [
			190,
			191
		],
		url: "/collection/frankenstein/277"
	},
	{
		text: "Vol. III, Walton, in continuation, p. 192–Back endpaper recto",
		unit: "vol_3_walton_in_continuation",
		page: [
			192,
			192
		],
		url: "/collection/frankenstein/278"
	},
	{
		text: "Vol. III, Back endpaper verso–Inside back cover",
		unit: "vol_3_back_endpaper_verso–inside_back_cover",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/279"
	},
	{
		text: "Back cover",
		unit: "back_cover",
		page: [
			null,
			null
		],
		url: "/collection/frankenstein/280"
	}
];

const Seg = (props) => {
  const show = useStore(showState);
  const { setVariant } = useContext(VariantContext);
  const { seg, setSeg } = useContext(SegContext);
  const { setMSTarget } = useContext(MSTargetContext);
  const { setThomasThumbnail } = useContext(ThomasThumbnailContext);
  const el = props.teiNode;
  const id = el.getAttribute("xml:id");
  const chunk = id?.substring(0, 3);
  const basePath = "https://raw.githubusercontent.com/FrankensteinVariorum/fv-data/master/2023-variorum-chapters/";
  const targetString = `${basePath}f${props.source}_${props.unit}.xml#${id}`;
  const [intensityClass, setIntensityClass] = useState("");
  const [segBgClass, setSegBgClass] = useState("");
  const ptr = props.spine.documentElement.querySelector(`rdg>ptr[target="${targetString}"]`);
  useEffect(() => {
    const nAttr = ptr ? ptr.closest("app").getAttribute("n") : void 0;
    const n = nAttr ? parseInt(nAttr) : void 0;
    const level = n && n <= 1 ? 0 : n <= 11 ? 1 : n && n <= 30 ? 2 : 3;
    setIntensityClass(`app-intensity-${level}`);
    const idSelected = window.location.hash.substring(1);
    setSeg({ id: idSelected });
    if (el.getAttribute("xml:id").replace(/-.*/, "") == idSelected) {
      setSegBgClass(`seg_bg--${props.source.toLowerCase()}`);
    } else {
      setSegBgClass("");
    }
  }, []);
  const toggleSegBg = (segId, setHighlight) => {
    const segElementsSelected = document.getElementsByClassName(segId);
    Array.from(segElementsSelected).forEach(
      (node) => node.classList.toggle(`seg_bg--${props.source.toLowerCase()}`, setHighlight)
    );
  };
  useEffect(() => {
    if (show.showVariants) {
      toggleSegBg(seg?.id, true);
    }
  }, [show.showVariants]);
  if (!ptr) {
    return /* @__PURE__ */ React.createElement(SafeUnchangedNode, { ...props });
  }
  const handleClick = async (event) => {
    if (!show.showVariants) {
      setVariant(null);
      setSeg(null);
      return;
    }
    const app = ptr.closest("app");
    const rdgGrp = app.querySelectorAll("rdgGrp");
    const getReadings = async () => {
      const readings = [];
      for (const rg of Array.from(rdgGrp)) {
        const n = rg.getAttribute("n");
        const value = !n ? "" : JSON.parse(n.replace(/%q%/g, '\\"').replace(/([\[\]\s,])'/g, '$1"').replace(/'([\[\]\s<>,])/g, '"$1')).join(" ");
        const rdgs = rg.querySelectorAll("rdg");
        let sources2 = [];
        rdgs.forEach((r) => {
          const wit = r.getAttribute("wit") || "";
          sources2.push(wit.replace("#f", "") || "");
        });
        if (sources2.length > 0) {
          readings.push({
            sources: sources2,
            value
          });
        }
      }
      return readings;
    };
    let currentSegId = event.target.closest("span[class*='app']")?.className.split(" ")[0].replace(/-.*/, "");
    console.log("current id:", currentSegId);
    console.log("seg.id", seg?.id);
    if (seg?.id != currentSegId) {
      const readings = await getReadings();
      setVariant({ readings });
    } else {
      setVariant(null);
    }
    if (seg?.id) {
      toggleSegBg(seg?.id, false);
    }
    let appNum;
    if (seg?.id != currentSegId) {
      setSeg({ id: currentSegId });
      toggleSegBg(currentSegId, true);
      appNum = currentSegId?.split("app")[1];
      appState.set(appNum);
      console.log("app:", appNum, "chunk:", currentSegId.substring(0, 3));
      unitLinkState.set({
        edition: props.source,
        chunk: currentSegId.substring(0, 3),
        f1818Chp: sources.find((s) => s.label === `1818`).units.find((u) => u.chunks.find((c) => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1])).id,
        f1823Chp: sources.find((s) => s.label === `1823`).units.find((u) => u.chunks.find((c) => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1])).id,
        f1831Chp: sources.find((s) => s.label === `1831`).units.find((u) => u.chunks.find((c) => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1])).id,
        fThomasChp: sources.find((s) => s.label === `Thomas`).units.find((u) => u.chunks.find((c) => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1])).id,
        fMSChp: sources.find((s) => s.label === `MS`).units.find((u) => u.chunks.find((c) => c.label == chunk && c.apps[0] <= appNum && appNum <= c.apps[1]))?.id || ""
      });
      console.log(unitLinkState.get());
    } else {
      setSeg("");
    }
    const witDetail = app.querySelector(`witDetail[wit='#fMS']`);
    const MS_Target = props.source == "MS" ? witDetail?.getAttribute("target").replace("sga:", "").split("s")[0] : null;
    setMSTarget({ suffix: MS_Target });
    if (props.source == "Thomas") {
      const note = el.querySelector("tei-note");
      const add = el.querySelector("tei-add");
      const del = el.querySelector("tei-del");
      if (!(note || add || del)) {
        setThomasThumbnail(null);
        return;
      }
      let ThomasPageNum = Math.min(Number(note?.getAttribute("n") || 999), Number(add?.getAttribute("n") || 999), Number(del?.getAttribute("n") || 999)) || null;
      const ThomasThumbnail = props.source === "Thomas" && ThomasPageNum ? "https://www.themorgan.org/" + linkData.find((ld) => ld.unit == props.unit && ld.page[0] == ThomasPageNum || ld.page[1] == ThomasPageNum)?.url : null;
      setThomasThumbnail(ThomasThumbnail);
    }
  };
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement(
    "span",
    {
      id: id.replace(/-.*/, ""),
      className: show.showVariants ? `${id.replace(/-.*/, "")} ${intensityClass} ${segBgClass}` : "",
      style: { cursor: "pointer" },
      onClick: handleClick
    },
    /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: el.childNodes, ...props })
  ));
};

const Del = (props) => {
  const el = props.teiNode;
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("del", null, /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: el.childNodes, ...props })));
};

const Unclear = (props) => {
  const el = props.teiNode;
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("span", { className: "unclear" }, /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: el.childNodes, ...props })));
};

const PEnd = (props) => {
  props.teiNode;
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("span", { className: "paragraph-break" }, "¶"), /* @__PURE__ */ React.createElement("span", { className: "paragraph-break-reading-panel" }, /* @__PURE__ */ React.createElement("br", null)));
};

const Add = (props) => {
  const el = props.teiNode;
  const place = el.getAttribute("place");
  return /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement("ins", null, place == "sublinear" ? /* @__PURE__ */ React.createElement("sub", { className: "insertion" }, "^") : /* @__PURE__ */ React.createElement("sup", { className: "insertion" }, "^"), /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: el.childNodes, ...props })));
};

function TEI({ doc, data, elements }) {
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
  const routes = {
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
    "tei-add": (props) => /* @__PURE__ */ React.createElement(Add, { ...props }),
    "tei-del": (props) => /* @__PURE__ */ React.createElement(Del, { ...props }),
    "mdel": (props) => /* @__PURE__ */ React.createElement(Del, { ...props }),
    "unclear": (props) => /* @__PURE__ */ React.createElement(Unclear, { ...props }),
    "p-end": (props) => /* @__PURE__ */ React.createElement(PEnd, { ...props })
  };
  const usableDoc = typeof DOMParser !== "undefined" ? new DOMParser().parseFromString(data, "text/xml") : doc;
  return /* @__PURE__ */ React.createElement(BasicRouter, { doc: usableDoc, elements, routes });
}

const ReadingGroup = ({ group }) => {
  const { seg } = useContext(SegContext);
  let data = `<?xml version="1.0" encoding="UTF-8"?><TEI xmlns="http://www.tei-c.org/ns/1.0">${group.value}</TEI>`;
  const delSpanStart = /<delspanstart\/>/g;
  const delSpanEnd = /<delspanend\/>/g;
  data = data.replace(delSpanStart, `<span class="delspan">✗—</span>`);
  data = data.replace(delSpanEnd, `<span class="delspan">—✗</span>`);
  return /* @__PURE__ */ React.createElement("div", { className: "reading-group" }, /* @__PURE__ */ React.createElement("div", { className: "reading-group-title" }, group.sources.map((ed, index) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: index,
      className: `clr--${ed.toLowerCase()}`,
      href: group.value !== "" ? `/viewer/${ed}/${unitLinkState.get()[`f${ed}Chp`]}/#${seg?.id}` : void 0
    },
    ed,
    ","
  ))), /* @__PURE__ */ React.createElement("a", { className: "reading-group-content", href: `#${seg.id}` }, group.value !== "" ? /* @__PURE__ */ React.createElement(TEI, { doc: null, data, elements: ["del", "p", "add", "mdel", "unclear", "note"] }) : /* @__PURE__ */ React.createElement("div", { className: "empty-group", title: `${group.sources.join(", ")} ${group.sources.length > 1 ? "are" : "is"} missing here.` }, "∅")));
};

const sgalogo = new Proxy({"src":"/_astro/sgalogo.7o9akSrF.png","width":248,"height":140,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const morganlogo = new Proxy({"src":"/_astro/morganlogo.1d1jXueH.png","width":300,"height":248,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const Variation = () => {
  const show = useStore(showState);
  const { variant } = useContext(VariantContext);
  const { msTarget, setMSTarget } = useContext(MSTargetContext);
  let MStargetLink = `http://shelleygodwinarchive.org/sc/oxford/ms_abinger/${msTarget?.suffix}`;
  const { thomasThumbnail } = useContext(ThomasThumbnailContext);
  let ThomasThumbnailLink = `${thomasThumbnail}`;
  const [sidePanelHeight, setSidePanelHeight] = useState(null);
  useEffect(() => {
    const container = document.querySelector("#viewer__contents");
    const sidePanel = document.querySelector("#viewer_variations");
    if (!container || !sidePanel)
      return;
    function updateSidePanelHeight() {
      const containerRect = container?.getBoundingClientRect();
      const visibleHeight = containerRect?.bottom;
      const sidePanelMaxHeight = containerRect && visibleHeight ? Math.min(containerRect.height, visibleHeight) : null;
      setSidePanelHeight(sidePanelMaxHeight);
    }
    if (window.innerWidth > 740) {
      updateSidePanelHeight();
      window.addEventListener("scroll", updateSidePanelHeight);
    }
  });
  if (!variant || !show.showVariants)
    return null;
  return /* @__PURE__ */ React.createElement("aside", { id: "viewer_variations", style: { height: sidePanelHeight } }, /* @__PURE__ */ React.createElement("div", { className: "app-list" }, /* @__PURE__ */ React.createElement("hr", { className: "app-list-to-divider" }), variant.readings.map((g) => /* @__PURE__ */ React.createElement(ReadingGroup, { group: g })), /* @__PURE__ */ React.createElement("div", { className: "link-list" }, msTarget?.suffix && /* @__PURE__ */ React.createElement("a", { href: msTarget?.suffix !== "NotFound" ? MStargetLink : void 0, className: "sga_logo", target: "_blank" }, /* @__PURE__ */ React.createElement("img", { src: sgalogo.src, alt: "The Shelley-Godwin Archive Logo" }), /* @__PURE__ */ React.createElement("p", null, "View this passage on the Shelley-Godwin Archive")), thomasThumbnail && /* @__PURE__ */ React.createElement("a", { href: ThomasThumbnailLink, className: "morgan_logo", target: "_blank" }, /* @__PURE__ */ React.createElement("img", { src: morganlogo.src, alt: "The Morgan Library Logo" }), /* @__PURE__ */ React.createElement("p", null, "View this page from the Thomas Copy at the Morgan Library")))));
};

const AutoClickComponent = () => {
  useEffect(() => {
    const fragmentIdentifier = window.location.hash;
    const id = fragmentIdentifier.substring(1);
    const span = document.getElementById(id);
    if (span) {
      span.click();
    }
  }, []);
  return null;
};

const Note = (props) => {
  const el = props.teiNode;
  const resp = el.getAttribute("resp");
  const show = useStore(showState);
  let isByAuthor = resp == "#MWS" || el.textContent?.includes("*") ? true : props.source == "MS" && !resp;
  let isShowNote = isByAuthor ? true : show.showNote;
  let fontSize = isByAuthor ? `100%` : `85%`;
  return isShowNote ? /* @__PURE__ */ React.createElement(Behavior, { node: props.teiNode }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "note",
      title: `note by ${isByAuthor ? "Mary Shelley" : resp ? resp : "anonymous"}`,
      style: { fontSize }
    },
    /* @__PURE__ */ React.createElement("div", null, resp ? /* @__PURE__ */ React.createElement("span", { className: "resp" }, isByAuthor ? "Mary Shelley" : resp ? resp : "anonymous", ": ") : null, /* @__PURE__ */ React.createElement(TEINodes, { teiNodes: el.childNodes, ...props }))
  )) : null;
};

let localParser;
if (typeof DOMParser !== "undefined") {
  localParser = (data) => {
    return new DOMParser().parseFromString(data, "text/xml");
  };
} else {
  const { JSDOM } = await import('jsdom');
  localParser = (data) => {
    const j = new JSDOM(data, { contentType: "text/xml" });
    return j.window.document;
  };
}
function Tei({ data, elements, spine, source, unit }) {
  const [variant, setVariant] = useState();
  const [seg, setSeg] = useState();
  const [msTarget, setMSTarget] = useState();
  const [thomasThumbnail, setThomasThumbnail] = useState(null);
  const {
    Tei: Tei2,
    // Note,
    Ptr,
    Ref,
    TeiHeader
  } = DefaultBehaviors;
  const usableSpine = localParser(spine);
  const routes = {
    "tei-tei": Tei2,
    // "tei-note": Note,
    "tei-ptr": Ptr,
    "tei-ref": Ref,
    "tei-teiheader": TeiHeader,
    "tei-seg": (props) => /* @__PURE__ */ React.createElement(Seg, { source, spine: usableSpine, unit, ...props }),
    "tei-del": (props) => /* @__PURE__ */ React.createElement(Del, { ...props }),
    "tei-mdel": (props) => /* @__PURE__ */ React.createElement(Del, { ...props }),
    "mdel": (props) => /* @__PURE__ */ React.createElement(Del, { ...props }),
    "unclear": (props) => /* @__PURE__ */ React.createElement(Unclear, { ...props }),
    "tei-p-end": (props) => /* @__PURE__ */ React.createElement(PEnd, { ...props }),
    "tei-add": (props) => /* @__PURE__ */ React.createElement(Add, { ...props }),
    "tei-note": (props) => /* @__PURE__ */ React.createElement(Note, { source, unit, ...props })
  };
  const usableDoc = localParser(data);
  return /* @__PURE__ */ React.createElement(ThomasThumbnailContext.Provider, { value: { thomasThumbnail, setThomasThumbnail } }, /* @__PURE__ */ React.createElement(MSTargetContext.Provider, { value: { msTarget, setMSTarget } }, /* @__PURE__ */ React.createElement(SegContext.Provider, { value: { seg, setSeg } }, /* @__PURE__ */ React.createElement(AutoClickComponent, null), /* @__PURE__ */ React.createElement(VariantContext.Provider, { value: { variant, setVariant } }, /* @__PURE__ */ React.createElement("aside", { id: "viewer__marginalia" }), /* @__PURE__ */ React.createElement(BasicRouter, { doc: usableDoc, elements, routes }), /* @__PURE__ */ React.createElement(Variation, null)))));
}

const $$Astro = createAstro("https://frankensteinvariorum.github.io");
function getStaticPaths() {
  return sources.reduce((acc, s) => {
    s.units.map((u) => {
      acc.push({
        params: {
          source: s.label,
          unit: slugify(u.label)
        }
      });
    });
    return acc;
  }, []);
}
const $$unit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$unit;
  const { source, unit } = Astro2.params;
  const raiseTeiElements = (teiContent) => {
    const MSpEndRegex = /<milestone unit="tei:p-END"\/>/g;
    const delSpanStart = /<delSpan[^>]*spanTo[^>]*\/>/g;
    const delSpanEnd = /<delSpan\sanchor[^>]*\/>/g;
    teiContent = teiContent.replace(delSpanStart, `<span class="delspan">\u2717\u2014</span>`);
    teiContent = teiContent.replace(delSpanEnd, `<span class="delspan">\u2014\u2717</span>`);
    teiContent = teiContent.replace(MSpEndRegex, `<p-end/>`);
    return teiContent;
  };
  const fetchData = async (url) => {
    const response = await fetch(url);
    if (response.status === 404) {
      return null;
    }
    return await response.text();
  };
  const { label, id, chunks, corresp } = sources.filter((s) => s.label === source)[0].units.filter((u) => slugify(u.label) === unit)[0];
  let teiFile;
  const dataUrl = `https://raw.githubusercontent.com/FrankensteinVariorum/fv-data/master/2023-variorum-chapters/f${source}_${unit}.xml`;
  const text = await fetchData(dataUrl);
  teiFile = text || `<?xml version="1.0" encoding="UTF-8"?><TEI xmlns="http://www.tei-c.org/ns/1.0">No TEI data found.</TEI>`;
  teiFile = raiseTeiElements(teiFile);
  const jdom = processTei(teiFile);
  const teiDom = jdom.window.document;
  const tei = jdom.serialize();
  const elements = teiDom.documentElement.getAttribute("data-elements").split(",");
  let spineData;
  if (chunks) {
    for (const chunk of chunks) {
      const chunkLabel = chunk.label;
      const dataUrl2 = `https://raw.githubusercontent.com/FrankensteinVariorum/fv-data/master/2023-standoff_Spine/spine_${chunkLabel}.xml`;
      const chunkText = await fetchData(dataUrl2);
      if (chunkText) {
        spineData += chunkText.replace(/<\?xml version="1.0" encoding="UTF-8"\?>/gm, "");
      }
    }
  }
  const spine = `<?xml version="1.0" encoding="UTF-8"?><TEI xmlns="http://www.tei-c.org/ns/1.0">${spineData}</TEI>`;
  return renderTemplate`${renderComponent($$result, "Viewer", $$Viewer, { "edition": source }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeiBaseStyle", $$TeiBaseStyle, {})} ${renderComponent($$result2, "Tei", Tei, { "style": "", "data": tei, "elements": elements, "spine": spine, "source": source, "unit": unit, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/components/tei/tei", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/viewer/[source]/[unit].astro", void 0);

const $$file = "C:/Users/Admin/Documents/Github/fv/fv-web2023/src/pages/viewer/[source]/[unit].astro";
const $$url = "/viewer/[source]/[unit]";

export { $$unit as default, $$file as file, getStaticPaths, $$url as url };
