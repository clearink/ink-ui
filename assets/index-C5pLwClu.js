import{c as S,e as y,r as d,v as C,C as E,w as N,h as p,a as v,j as i,o as k}from"./index-BBhucVwM.js";import{f as G}from"./flatten-children-W8zz7SWo.js";function P(s,e){const{align:n,className:a,direction:t,wrap:o}=e,r=t==="horizontal"&&y(n)?"center":n;return S(s,{[`${s}--${t}`]:t&&t!=="horizontal",[`${s}--align-${r}`]:r,[`${s}--wrap`]:o},a)}const A={default:16,large:24,small:8};function F(s,e){return d.useMemo(()=>{const n=C(s)?s:[s,s],a=e?2:1;return n.map((t=0)=>(A[t]??t)/a)||0},[s,e])}const u={direction:"horizontal",size:"small",wrap:!1},I=["align","direction","size","split","wrap","children","split"];function D(s){const{space:e}=E.useState(),n=N(s,{...u,size:p(e==null?void 0:e.size,u.size)}),{children:a,size:t,split:o,style:r}=n,l=v("space"),f=P(l,n),[g,h]=F(t,!!o),x=G(a).map((c,m,w)=>{const j=w.length-m===1,z=p(c==null?void 0:c.key,`${m}`);return i.jsxs(d.Fragment,{children:[i.jsx("div",{className:`${l}-item`,children:c}),!!o&&!j&&i.jsx("span",{className:`${l}-item-split`,children:o})]},z)}),$=k(n,I);return i.jsx("div",{...$,className:f,style:{columnGap:g,rowGap:h,...r},children:x})}export{D as S};