var E=Object.defineProperty;var k=(s,e,n)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var c=(s,e,n)=>k(s,typeof e!="symbol"?e+"":e,n);import{r as h,j as d}from"./index-CtQgf38W.js";import{m as w,a as y}from"./node-equal-DdU5tx-g.js";import{f as x,u as g,a as C,b as I,C as S,c as F}from"./index-DjnRMsMa.js";import{h as l}from"./has-own-BpnzvHCN.js";import{o as p}from"./index-D8thIb-8.js";function M(s,e){const n=new Set,t=new Set;h.Children.forEach(s,o=>{n.add(o.key)}),h.Children.forEach(e,o=>{t.add(o.key)});const r=new Set,i=new Set;return t.forEach(o=>{n.has(o)||r.add(o)}),n.forEach(o=>{t.has(o)||i.add(o)}),[r,i]}function _(s,e,n){const t=new Map,r=[],i=new Map;s.forEach(a=>{i.set(a.key,a)}),h.Children.forEach(n,(a,u)=>{if(t.has(a.key))throw new Error(`two children with the same key, '${a.key}'. `);const f=e.has(a.key)?a:i.get(a.key);t.set(a.key,u),r.push(f)});let o=-1;return s.forEach(a=>{const u=x(t.get(a.key),-1);u<0?r.splice(++o,0,a):o<u&&(o=u)}),r}function T(s){return l(s,"node")&&l(s,"freeze")}const m=["children","onFinished","when","unmountOnExit"];class b{constructor(e){c(this,"components",new Map);c(this,"current",[]);c(this,"elements",[]);this._props=e,this.current=e.children}}class j{constructor(e,n){c(this,"uniqueId",w("gt-"));c(this,"makeElement",(e,n)=>{const t=e.key,r=p(this._props,m);return Object.assign(r,n,{ref:o=>{o?this.components.set(t,o):this.components.delete(t)},key:this.uniqueId(),when:!0,unmountOnExit:!0}),{freeze:!1,node:h.createElement(S,r,e),key:t}});c(this,"cloneElement",(e,n)=>{let{node:t,key:r}=e;const i=p(this._props,m);return Object.assign(i,{onExited:I(i.onExited,this.handleFinished)}),n&&(i.when=!1),{freeze:n,node:h.cloneElement(t,i),key:r}});c(this,"setInnerProps",e=>{this.states._props=e});c(this,"setCurrent",e=>{this.states.current=e});c(this,"setElements",e=>{const n=new Map;e.forEach(t=>{n.set(t.node.key,t)}),this.states.elements=Array.from(n.values())});c(this,"handleFinished",()=>{var n,t;let e=!0;this.setElements(this.elements.filter(r=>{const i=this.components.get(r.key);return i?(i.isExiting&&(e=!1),!i.isExited):!1})),e&&((t=(n=this._props).onFinished)==null||t.call(n)),e&&this.forceUpdate()});c(this,"updateElements",()=>{const{children:e}=this._props,[n,t]=M(this.states.current,e),i=_(this.elements,n,e).reduce((o,a)=>(o.push(T(a)?this.cloneElement(a,t.has(a.key)):this.makeElement(a,{appear:!0})),o),[]);this.setElements(i),this.setCurrent(e),this.forceUpdate()});c(this,"renderNodes",e=>{const n=new Map;return h.Children.forEach(e,t=>{n.set(t.key,t)}),this.elements.map(t=>{const r=n.get(t.key);return t.freeze||!r||r!==t.node.props.children&&(t.node=h.cloneElement(t.node,void 0,r)),t.node})});this.forceUpdate=e,this.states=n,n.elements=[],h.Children.forEach(n.current,t=>{n.elements.push(this.makeElement(t))})}get _props(){return this.states._props}get elements(){return this.states.elements}get components(){return this.states.components}}function O(s){const e=g(),n=C(()=>new b(s)),t=h.useMemo(()=>new j(e,n),[e,n]);return h.useMemo(()=>{t.setInnerProps(s)},[t,s]),{actions:t,states:n}}function U(s,e){const{children:n}=s,{actions:t,states:r}=O(s);return h.useImperativeHandle(e,()=>({get components(){return r.components}}),[r]),F(n,()=>y(r.current,n)?!1:(t.updateElements(),!0))?null:d.jsx(d.Fragment,{children:t.renderNodes(n)})}var A=h.forwardRef(U);export{A as G};
