import{j as t,w as p,n as k}from"./index-CtQgf38W.js";import{c as i}from"./classnames-i4W5uzNT.js";import{u as d,D as C}from"./preset_attrs-BM4CFZ4s.js";import{o as u,c as f}from"./index-D8thIb-8.js";import{n as r}from"./index-ttufKTwy.js";import{u as g}from"./index-BopEiQD3.js";import{T as j}from"./index-D_sGqRS4.js";function $(e,c){const{className:s}=c;return i(e,{},s)}const N=["children"];function _(e){const{children:c}=e,s=d("checkbox-group"),n=$(s,e),a=u(e,N);return t.jsxs("div",{...a,className:n,children:[t.jsx("input",{type:"checkbox"}),t.jsx("span",{children:c})]})}const V=f({cancelValue:r,registerValue:r});function D(e){const{checked:c,defaultChecked:s,onChange:n}=e;return g({defaultValue:s,onChange:n,value:c})}function F(e,c,s){const{className:n,indeterminate:a}=c,{checked:o,disabled:l}=s;return i(e,{[`${e}--checked`]:o,[`${e}--disabled`]:l,[`${e}--indeterminate`]:a},n)}const G=["autoFocus","children","disabled","checked","defaultChecked","indeterminate","onChange"];function S(e){const c=V.useState(),s=p({...e,disabled:e.disabled||c.disabled},{disabled:C.useState()}),{children:n,disabled:a}=s,o=d("checkbox"),[l,h]=D(s),m=F(o,s,{checked:l,disabled:a}),x=u(s,G);return t.jsx(j,{component:"Checkbox",disabled:l,selector:`.${o}__input`,children:t.jsxs("label",{...x,className:m,children:[t.jsx("input",{className:`${o}__original`,checked:!!l,type:"checkbox",onChange:b=>{!a&&h(b.target.checked)}}),t.jsx("span",{className:`${o}__input`}),!k(n)&&t.jsx("span",{className:`${o}__label`,children:n})]})})}const v=Object.assign(S,{Group:_});function P(){const e=c=>{console.log(`checked = ${c}`)};return t.jsx(v,{onChange:e,children:"Checkbox"})}export{P as A};
