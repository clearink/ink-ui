var B=Object.defineProperty;var O=(e,s,n)=>s in e?B(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n;var y=(e,s,n)=>O(e,typeof s!="symbol"?s+"":s,n);import{r as i,d as z,j as t,o as w,e as S,f as P,g as V,w as h,c as f,i as C,h as p,C as D,a as H,k as T,l as U,s as X}from"./index-BBhucVwM.js";import{s as Z,w as x}from"./index-h6o6-_bL.js";import"./index-BxPhnewK.js";function G(e,s){const{fallback:n,props:o}=s;return i.isValidElement(e)?i.cloneElement(e,z(o)?o(e.props||{}):o):n}function E(e,s){return Z(e,s)}function J(e){const s=E(e,{fill:"currentColor",fillRule:"evenodd"});return t.jsx("svg",{...s,children:t.jsx("path",{d:"M799.86 166.31q.02 0 .08.06l57.69 57.7q.05.04.06.08v.06q0 .04-.06.09L569.93 512l287.7 287.7q.05.05.06.09v.07q0 .02-.06.08l-57.7 57.69q-.04.05-.07.06h-.07q-.04 0-.09-.06L512 569.93l-287.7 287.7q-.05.05-.09.06h-.07q-.03 0-.08-.06l-57.69-57.7q-.05-.04-.06-.07v-.07q0-.04.06-.09L454.07 512l-287.7-287.7q-.05-.05-.06-.09v-.07q0-.03.06-.08l57.7-57.69q.04-.05.07-.06h.07q.04 0 .09.06L512 454.07l287.7-287.7q.05-.05.09-.06z"})})}const K=x(J,{name:"close",theme:"outlined"});function Q(e,s){const{closeIcon:n}=e,{closeIconRender:o}=s;let c=n;const l=w(e,["closable","closeIcon","closeIconRender"]);return o&&(c=o(c)),i.isValidElement(c)?i.cloneElement(c,l):t.jsx("span",{...l,children:c})}function N(e){const s=e?e.closable:void 0,n=e?e.closeIcon:void 0;if(S(s))return P(n)?!1:S(n)?void 0:{closeIcon:n};if(s===!1)return!1;const o={closeIcon:n};return V(s)?h(s,o):o}function W(e,s,n){const o=i.useMemo(()=>N(e),[e]),c=i.useMemo(()=>N(s),[s]),l=i.useMemo(()=>h(n||{},{closeIcon:t.jsx(K,{})}),[n]);return i.useMemo(()=>{const u=o===!1?!1:o?h(o,c||null,l):c===!1?!1:c?h(c,l):l.closable?l:!1;return u===!1?[!1,null]:[!0,Q(u,l)]},[o,c,l])}function Y(e){const s=e;return t.jsx("svg",{...s,children:t.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m193.5 301.7-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7"})})}const ee=x(Y,{name:"check-circle",theme:"filled"});function se(e){const s=E(e,{fill:"currentColor",fillRule:"evenodd"});return t.jsx("svg",{...s,children:t.jsx("path",{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64m127.98 274.82h-.04l-.08.06L512 466.76 384.14 338.89q-.05-.07-.08-.06h-.07q-.04 0-.09.05l-45.02 45.02-.05.09v.09l.06.06L466.75 512 338.89 639.86q-.07.05-.06.08v.07q0 .04.05.09l45.02 45.02.09.05h.07q.03 0 .08-.05L512 557.25l127.86 127.87q.05.06.08.05h.07q.04 0 .09-.05l45.02-45.02.05-.09v-.09l-.05-.06L557.25 512l127.87-127.86q.06-.05.05-.08v-.07q0-.04-.05-.09l-45.02-45.02-.09-.05h-.07Z"})})}const ne=x(se,{name:"close-circle",theme:"filled"});function te(e){const s=e;return t.jsx("svg",{...s,children:t.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96"})})}const oe=x(te,{name:"exclamation-circle",theme:"filled"});function ce(e){const s=e;return t.jsx("svg",{...s,children:t.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96"})})}const le=x(ce,{name:"info-circle",theme:"filled"}),re={success:t.jsx(ee,{}),info:t.jsx(le,{}),error:t.jsx(ne,{}),warning:t.jsx(oe,{})};function ie(e){return e&&re[e]||null}function ae(e,s,n){const{banner:o,type:c,description:l,className:u,classNames:a={}}=s;return{root:f(e,{[`${e}--as-banner`]:o,[`${e}--${c}`]:c,[`${e}--has-description`]:!C(l)},n==null?void 0:n.className,u,a.root),icon:f(`${e}__icon`,a.icon),content:f(`${e}__content`,a.content),message:f(`${e}__message`,a.message),description:f(`${e}__description`,a.description),action:f(`${e}__action`,a.action),closeBtn:f(`${e}__close-btn`,a.closeBtn)}}const ue=["action","onClose","onAfterClose","banner","closable","closeIcon","description","icon","message","showIcon","type",...X];function de(e,s){const n=h(e,{showIcon:p(e.showIcon,!!e.banner),type:p(e.type,e.banner?"warning":"info")}),{action:o,showIcon:c,icon:l,type:u,message:a,description:q,onClose:I,onAfterClose:g}=n,{alert:j}=D.useState(),v=i.useRef(null),b=H("alert"),d=ae(b,n,j),m=T(n,j),[M,k]=i.useState(!0);i.useImperativeHandle(s,()=>({get nativeElement(){return v.current}}),[v]);const L=r=>{r.stopPropagation(),I&&I(r),!r.defaultPrevented&&k(!1)},_=i.useMemo(()=>{if(!c)return null;const r=p(l,ie(u));return G(r,{fallback:t.jsx("span",{className:d.icon,style:m.icon,children:r}),props:$=>({className:f($.className,d.icon),style:{...$.style,...m.icon}})})},[d.icon,l,c,m.icon,u]),[he,R]=W(n,j,{closeIconRender:r=>t.jsx("button",{className:d.closeBtn,style:m.closeBtn,tabIndex:0,type:"button",onClick:L,children:r})}),A=w(n,ue);return t.jsx(U,{unmountOnExit:!0,timeouts:{appear:0,enter:0},classNames:`${b}-motion`,when:M,onExit:r=>{r.$set("height",`${r.offsetHeight}px`)},onExiting:r=>{r.$set("height","0px")},onExited:r=>{r.$remove("height"),g==null||g()},children:t.jsxs("div",{ref:v,className:d.root,style:m.root,...A,children:[_,t.jsxs("div",{className:d.content,style:m.content,children:[t.jsx("div",{className:d.message,style:m.message,children:a}),!C(q)&&t.jsx("div",{className:d.description,style:m.description,children:q})]}),!C(o)&&t.jsx("div",{className:d.action,style:m.action,children:o}),R]})})}const F=i.forwardRef(de);class me extends i.Component{constructor(){super(...arguments);y(this,"state",{error:null,errorInfo:null})}componentDidCatch(n,o){this.setState({error:n,errorInfo:o})}render(){const{message:n,description:o,id:c,children:l}=this.props,{error:u,errorInfo:a}=this.state;return u?t.jsx(F,{id:c,message:p(n,`${u||""}`),type:"error",description:t.jsx("pre",{style:{fontSize:"0.9em",overflowX:"auto",margin:0},children:p(o,a==null?void 0:a.componentStack)})}):l}}const fe=Object.assign(F,{ErrorBoundary:me});function ve(){return t.jsx(fe,{message:"Success Text",type:"success"})}export{fe as A,ve as a};
