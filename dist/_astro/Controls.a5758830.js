import{r}from"./index.72123234.js";import{j as e,c as h,i as f,f as m,d as j,a as v,u as w,o as N,e as S,g as C,s as E}from"./units.fcdfccc0.js";function p(s){return s.replace(/\s+/g,"_").toLowerCase()}function k({source:s,unit:o}){const a=l=>{const c=l.target.value,u=h.filter(i=>i.label===l.target.value)[0],x=h.find(i=>i.label==s).units.find(i=>i.id==o).chunks[0].label;if(u){const i=v.get(),g=h.find(t=>t.label===c).units.find(t=>t.chunks.find(d=>d.label==x&&d.apps[0]<=i&&i<=d.apps[1]))?.id||h.find(t=>t.label===c).units[0].id,n=`/viewer/${c}/${p(g)}/index.html`;window.location.replace(n)}};return e.jsx("div",{children:e.jsxs("div",{className:"paging",children:[e.jsx("div",{className:"in-line",children:e.jsxs("form",{method:"get",action:"viewer",children:[e.jsx("label",{className:"bold-choose",children:"CHOOSE A VERSION"}),e.jsx("select",{className:"select-style",name:"tei",value:s,onChange:a,children:h.map(l=>e.jsx("option",{className:l.label,value:l.label,children:l.label},l.label))})]})}),e.jsxs("div",{id:"font_button",className:"in-line",children:[e.jsx("button",{id:"increase-font",onClick:f,disabled:m.get()>=1.3}),e.jsx("button",{id:"decrease-font",onClick:j,disabled:m.get()<=.8})]})]})})}function P(){const s=r.useRef([]),o=w(E);return r.useEffect(()=>{s.current=[...document.querySelectorAll("tei-text")]},[]),r.useEffect(()=>{(s.current||!o[3])&&s.current.forEach(a=>{a.classList.toggle("no-text",!o.showText)})},[o]),e.jsxs("div",{children:[e.jsx("label",{className:"options-label bold-choose",children:"CHOOSE OPTIONS"}),e.jsxs("label",{className:"options-label",children:[e.jsx("input",{name:"variation",type:"checkbox",checked:o.showVariants,onChange:N}),"See Variants"]}),e.jsxs("label",{className:"options-label",children:[e.jsx("input",{name:"text",type:"checkbox",checked:o.showText,onChange:S}),"See Text"]}),e.jsxs("label",{className:"options-label",children:[e.jsx("input",{name:"note",type:"checkbox",checked:o.showNote,onChange:C}),"See Note"]})]})}function O({source:s,unit:o}){const[a,l]=r.useState(0),c=h.filter(n=>n.label===s).flatMap(n=>n.units.map(t=>t.id));r.useEffect(()=>{const n=window.location.pathname.split("/"),t=n[n.length-1].length<1?n[n.length-2]:n[n.length-1].split("#")[0];console.log("chapter: ",t);const d=c.findIndex(b=>b===t);l(d)},[a]);const u=()=>{if(a>0){const n=a-1;l(n);const t=`/viewer/${s}/${c[n]}/#viewer__contents`;window.location.replace(t),console.log("current page:",n,t)}},x=()=>{if(a<c.length-1){const n=a+1;l(n);const t=`/viewer/${s}/${c[n]}/#viewer__contents`;window.location.replace(t),console.log("current page:",n,t)}},i=h.filter(n=>n.label===s)[0],g=n=>{const t=n.target.value,d=`/viewer/${s}/${p(t)}/index.html`;window.location.replace(d)};return e.jsx("div",{children:e.jsxs("div",{className:"paging",children:[e.jsx("div",{className:"in-line",children:e.jsxs("form",{method:"get",children:[e.jsx("label",{className:"bold-choose",children:"CHOOSE A SECTION"}),e.jsx("select",{className:"select-style",value:o,onChange:g,children:i.units.map(n=>e.jsx("option",{value:p(n.id),children:n.label},n.id))})]})}),e.jsxs("div",{className:"in-line paging-buttons",children:[e.jsx("button",{onClick:u,className:"prev",disabled:a<=0}),e.jsx("label",{children:"Previous Page"}),e.jsx("label",{className:"margin-button",children:"Next Page"}),e.jsx("button",{className:"next",onClick:x,disabled:a>=c.length-1})]})]})})}function T(){const[s,o]=r.useState("MS"),[a,l]=r.useState();return r.useEffect(()=>{const[c,u,x,i]=window.location.pathname.split("/");o(x),l(i)},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{id:"viewer__controls",children:[e.jsx(k,{source:s,unit:a}),e.jsx(O,{source:s,unit:a}),e.jsx(P,{})]})})}export{T as default};
