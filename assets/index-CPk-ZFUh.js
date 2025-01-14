var E=Object.defineProperty;var w=(r,e,n)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var c=(r,e,n)=>w(r,typeof e!="symbol"?e+"":e,n);import{r as h,f as k,x as d,y,g as x,N as g,o as l,e as C,A as I,h as S,j as p,Q as F}from"./index-DwddvrhG.js";function M(r,e){const n=new Set,t=new Set;h.Children.forEach(r,o=>{n.add(o.key)}),h.Children.forEach(e,o=>{t.add(o.key)});const s=new Set,a=new Set;return t.forEach(o=>{n.has(o)||s.add(o)}),n.forEach(o=>{t.has(o)||a.add(o)}),[s,a]}function _(r,e,n){const t=new Map,s=[],a=new Map;r.forEach(i=>{a.set(i.key,i)}),h.Children.forEach(n,(i,u)=>{if(t.has(i.key))throw new Error(`two children with the same key, '${i.key}'. `);const m=e.has(i.key)?i:a.get(i.key);t.set(i.key,u),s.push(m)});let o=-1;return r.forEach(i=>{const u=k(t.get(i.key),-1);u<0?s.splice(++o,0,i):o<u&&(o=u)}),s}function T(r){return d(r,"node")&&d(r,"freeze")}const f=["children","onFinished","when","unmountOnExit"];class j{constructor(e){c(this,"components",new Map);c(this,"current",[]);c(this,"elements",[]);this._props=e,this.current=e.children}}class O{constructor(e,n){c(this,"uniqueId",g("gt-"));c(this,"makeElement",(e,n)=>{const t=e.key,s=l(this._props,f);return Object.assign(s,n,{ref:o=>{o?this.components.set(t,o):this.components.delete(t)},key:this.uniqueId(),when:!0,unmountOnExit:!0}),{freeze:!1,node:h.createElement(C,s,e),key:t}});c(this,"cloneElement",({node:e,key:n},t)=>{const s=l(this._props,f);return Object.assign(s,{onExited:I(s.onExited,this.handleFinished)}),t&&(s.when=!1),{freeze:t,node:h.cloneElement(e,s),key:n}});c(this,"setInnerProps",e=>{this.states._props=e});c(this,"setCurrent",e=>{this.states.current=e});c(this,"setElements",e=>{const n=new Map;e.forEach(t=>{n.set(t.node.key,t)}),this.states.elements=Array.from(n.values())});c(this,"handleFinished",()=>{var n,t;let e=!0;this.setElements(this.elements.filter(s=>{const a=this.components.get(s.key);return a?(a.isExiting&&(e=!1),!a.isExited):!1})),e&&((t=(n=this._props).onFinished)==null||t.call(n)),e&&this.forceUpdate()});c(this,"updateElements",()=>{const{children:e}=this._props,[n,t]=M(this.states.current,e),a=_(this.elements,n,e).reduce((o,i)=>(o.push(T(i)?this.cloneElement(i,t.has(i.key)):this.makeElement(i,{appear:!0})),o),[]);this.setElements(a),this.setCurrent(e),this.forceUpdate()});c(this,"renderNodes",e=>{const n=new Map;return h.Children.forEach(e,t=>{n.set(t.key,t)}),this.elements.map(t=>{const s=n.get(t.key);return t.freeze||!s||s!==t.node.props.children&&(t.node=h.cloneElement(t.node,void 0,s)),t.node})});this.forceUpdate=e,this.states=n,n.elements=[],h.Children.forEach(n.current,t=>{n.elements.push(this.makeElement(t))})}get _props(){return this.states._props}get elements(){return this.states.elements}get components(){return this.states.components}}function U(r){const e=y(),n=x(()=>new j(r)),t=h.useMemo(()=>new O(e,n),[e,n]);return h.useMemo(()=>{t.setInnerProps(r)},[t,r]),{actions:t,states:n}}function b(r,e){const{children:n}=r,{actions:t,states:s}=U(r);return h.useImperativeHandle(e,()=>({get components(){return s.components}}),[s]),S(n,()=>F(s.current,n)?!1:(t.updateElements(),!0))?null:p.jsx(p.Fragment,{children:t.renderNodes(n)})}const G=h.forwardRef(b);export{G};