import{c as y,i as D,a as z,b as A,w as B,f as m,u as P,o as E,B as e}from"./index-DdocyDJ_.js";import{r as p,j as t}from"./index-DCi0LQqD.js";import{f as N}from"./flatten-children-D1QXc7RB.js";function S(n,r){const{align:a,className:i,direction:s,wrap:l}=r,c=s==="horizontal"&&D(a)?"center":a;return y(n,{[`${n}--${s}`]:s&&s!=="horizontal",[`${n}--align-${c}`]:c,[`${n}--wrap`]:l},i)}const C={default:16,large:24,small:8};function G(n,r){return p.useMemo(()=>{const a=z(n)?n:[n,n],i=r?2:1;return a.map((s=0)=>(C[s]??s)/i)||0},[n,r])}const x={direction:"horizontal",size:"small",wrap:!1},F=["align","direction","size","split","wrap","children","split"];function u(n){const{space:r}=A.useState(),a=B(n,{...x,size:m(r==null?void 0:r.size,x.size)}),{children:i,size:s,split:l,style:c}=a,d=P("space"),f=S(d,a),[j,v]=G(s,!!l),g=N(i).map((o,h,k)=>{const w=k.length-h===1,$=m(o==null?void 0:o.key,`${h}`);return t.jsxs(p.Fragment,{children:[t.jsx("div",{className:`${d}-item`,children:o}),!!l&&!w&&t.jsx("span",{className:`${d}-item-split`,children:l})]},$)}),b=E(a,F);return t.jsx("div",{...b,className:f,style:{columnGap:j,rowGap:v,...c},children:g})}function L(){return t.jsxs(u,{style:{width:"100%"},direction:"vertical",children:[t.jsx(e,{block:!0,variant:"filled",children:"Primary"}),t.jsx(e,{block:!0,children:"Default"}),t.jsx(e,{block:!0,variant:"dashed",children:"Dashed"}),t.jsx(e,{block:!0,disabled:!0,children:"disabled"}),t.jsx(e,{block:!0,variant:"text",children:"text"}),t.jsx(e,{block:!0,variant:"link",children:"Link"})]})}function M(){return t.jsxs(u,{wrap:!0,children:[t.jsx(e,{variant:"filled",children:"Primary Button"}),t.jsx(e,{children:"Default Button"}),t.jsx(e,{variant:"dashed",children:"Dashed Button"}),t.jsx(e,{variant:"text",children:"Text Button"})]})}function R(){return t.jsxs(u,{wrap:!0,children:[t.jsx(e,{theme:"danger",variant:"filled",children:"Primary"}),t.jsx(e,{theme:"danger",children:"Default"}),t.jsx(e,{theme:"danger",variant:"dashed",children:"Dashed"}),t.jsx(e,{theme:"danger",variant:"text",children:"Text"})]})}export{L as A,M as a,R as b};