import{R as e,r}from"./index.TsOAAe7F.js";import{s as d,i as f,f as h,d as v,a as w,u as N,o as x,b as S,c as C,e as k}from"./units.H03ge64M.js";function E(a){return a.replace(/\s+/g,"_").toLowerCase()}function P({source:a,unit:c}){const l=o=>{const i=o.target.value,g=d.filter(s=>s.label===o.target.value)[0],u=d.find(s=>s.label==a).units.find(s=>s.id==c).chunks[0].label;if(g){const s=w.get(),p=d.find(n=>n.label===i).units.find(n=>n.chunks.find(m=>m.label==u&&m.apps[0]<=s&&s<=m.apps[1]))?.id||d.find(n=>n.label===i).units[0].id,t=`/viewer/${i}/${E(p)}`;window.location.replace(t)}};return e.createElement("div",null,e.createElement("div",{className:"paging"},e.createElement("div",{className:"in-line"},e.createElement("form",{method:"get",action:"viewer"},e.createElement("label",{className:"bold-choose"},"CHOOSE A VERSION"),e.createElement("select",{className:"select-style",name:"tei",value:a,onChange:l},d.map(o=>e.createElement("option",{className:o.label,value:o.label,key:o.label},o.label))))),e.createElement("div",{id:"font_button",className:"in-line"},e.createElement("button",{id:"increase-font",onClick:f,disabled:h.get()>=1.3}),e.createElement("button",{id:"decrease-font",onClick:v,disabled:h.get()<=.8}))))}function O(){const a=r.useRef([]),c=N(k);return r.useEffect(()=>{a.current=[...document.querySelectorAll("tei-text")]},[]),r.useEffect(()=>{(a.current||!c[3])&&a.current.forEach(l=>{l.classList.toggle("no-text",!c.showText)})},[c]),e.createElement("div",null,e.createElement("label",{className:"options-label bold-choose"},"CHOOSE OPTIONS"),e.createElement("label",{className:"options-label"},e.createElement("input",{name:"variation",type:"checkbox",checked:c.showVariants,onChange:x}),"See Variants"),e.createElement("label",{className:"options-label"},e.createElement("input",{name:"text",type:"checkbox",checked:c.showText,onChange:S}),"See Text"),e.createElement("label",{className:"options-label"},e.createElement("input",{name:"note",type:"checkbox",checked:c.showNote,onChange:C}),"See Note"))}function y({source:a,unit:c}){const[l,o]=r.useState(0),i=d.filter(t=>t.label===a).flatMap(t=>t.units.map(n=>n.id));r.useEffect(()=>{const t=window.location.pathname.split("/"),n=t[t.length-1].length<1?t[t.length-2]:t[t.length-1].split("#")[0];console.log("chapter: ",n);const m=i.findIndex(b=>b===n);o(m)},[l]);const g=()=>{if(l>0){const t=l-1;o(t);const n=`/viewer/${a}/${i[t]}/#viewer__contents`;window.location.replace(n),console.log("current page:",t,n)}},u=()=>{if(l<i.length-1){const t=l+1;o(t);const n=`/viewer/${a}/${i[t]}/#viewer__contents`;window.location.replace(n),console.log("current page:",t,n)}},s=d.filter(t=>t.label===a)[0],p=t=>{const n=t.target.value,m=`/viewer/${a}/${E(n)}`;window.location.replace(m)};return e.createElement("div",null,e.createElement("div",{className:"paging"},e.createElement("div",{className:"in-line"},e.createElement("form",{method:"get"},e.createElement("label",{className:"bold-choose"},"CHOOSE A SECTION"),e.createElement("select",{className:"select-style",value:c,onChange:p},s.units.map(t=>e.createElement("option",{key:t.id,value:E(t.id)},t.label))))),e.createElement("div",{className:"in-line paging-buttons"},e.createElement("button",{onClick:g,className:"prev",disabled:l<=0}),e.createElement("label",null,"Previous Page"),e.createElement("label",{className:"margin-button"},"Next Page"),e.createElement("button",{className:"next",onClick:u,disabled:l>=i.length-1}))))}function T(){const[a,c]=r.useState("MS"),[l,o]=r.useState();return r.useEffect(()=>{const[i,g,u,s]=window.location.pathname.split("/");c(u),o(s)},[]),e.createElement(e.Fragment,null,e.createElement("div",{id:"viewer__controls"},e.createElement(P,{source:a,unit:l}),e.createElement(y,{source:a,unit:l}),e.createElement(O,null)))}export{T as default};
