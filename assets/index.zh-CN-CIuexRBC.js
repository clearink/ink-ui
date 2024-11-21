var w=Object.defineProperty;var g=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var c=(e,t,s)=>g(e,typeof t!="symbol"?t+"":t,s);import{C}from"./index-BopEiQD3.js";import{M as B}from"./index-A4eXEg1a.js";import{r as d,j as r,f as S,w as $,g as j}from"./index-CtQgf38W.js";import{S as f}from"./index-B9fKqLPe.js";import{a as y}from"./index-D8thIb-8.js";import{g as h}from"./index-ttufKTwy.js";import{u as E,a as b,c as N,C as k}from"./index-DjnRMsMa.js";import{u as x,a as R}from"./preset_attrs-BM4CFZ4s.js";import{c as m}from"./classnames-i4W5uzNT.js";import{G as M}from"./index-CeCT7a-l.js";import{B as l}from"./index-5R8QKYXC.js";import"./flatten-children-DvfXgxiR.js";import"./node-equal-DdU5tx-g.js";import"./has-own-BpnzvHCN.js";import"./index-D_sGqRS4.js";function A(e){return e?getComputedStyle(e).opacity:y().offsetHeight}const U=Array.from({length:10},(e,t)=>`${t}`);class T{constructor(t){c(this,"$wrapper",{current:null});c(this,"items",new Map);c(this,"showRawChar",!0);this.history=[null,t]}get wrapper(){return this.$wrapper.current}}class W{constructor(t,s){c(this,"onEnter",t=>{const{history:s,items:n,wrapper:o}=this.states,a=n.get(s[0]);!o||!a||(this.setOffsetStyles(t,o,a),A(t))});c(this,"onEntering",t=>{const{history:s,items:n,wrapper:o}=this.states,a=n.get(s[1]);!o||!a||this.setOffsetStyles(t,o,a)});c(this,"onEntered",()=>{this.setShowRawChar(!0)});c(this,"setHistory",t=>{const{history:s}=this.states;this.states.history=[s[1],t]});c(this,"setItem",(t,s)=>{this.states.items.set(t,s)});c(this,"setOffsetStyles",(t,s,n)=>{const o=h(s),a=h(n),i=o.top-a.top;t.$set("transform",`translate3d(0, ${i}px, 0)`)});c(this,"setShowRawChar",t=>{const s=this.states.showRawChar!==t;return s&&this.forceUpdate(),this.states.showRawChar=t,s});this.forceUpdate=t,this.states=s}}function _(e){const{char:t}=e,s=E(),n=b(()=>new T(t)),o=d.useMemo(()=>new W(s,n),[s,n]),a=N(t,()=>(o.setHistory(t),o.setShowRawChar(!1)));return{actions:o,returnEarly:a,states:n}}function O(e){const{char:t}=e,s=x("badge-scroll-number"),{actions:n,returnEarly:o,states:a}=_(e);return o?null:a.showRawChar?r.jsx(r.Fragment,{children:t}):r.jsx(k,{appear:!0,when:!0,classNames:`${s}-motion`,onEnter:n.onEnter,onEntering:n.onEntering,onEntered:n.onEntered,children:r.jsx("span",{ref:a.$wrapper,className:s,children:U.map(i=>r.jsx("span",{ref:u=>{n.setItem(i,u)},children:i},i))})},t)}function v(e,t){const{className:s,classNames:n={}}=t;return{indicator:m(`${e}__indicator`,n.indicator),root:m(e,{},s,n.root)}}function F(e){const{count:t,maxCount:s}=e;return d.useMemo(()=>{if(!S(t))return null;const n=Math.min(t,s),o=`${Math.abs(n)}`.split("").map((a,i)=>({char:a,key:`${i}`,scroll:!0}));return n<0&&o.unshift({char:"-",key:"-",scroll:!1}),t>s&&o.push({char:"+",key:"+",scroll:!1}),o},[t,s])}const G={maxCount:99},H={onEnter:e=>{e.$set("width","0px")},onEntering:e=>{e.$set("width",`${e.scrollWidth}px`)},onEntered:e=>{e.$remove("width")},onEnterCancel:e=>{e.$set("width",`${e.offsetWidth}px`)},onExit:e=>{e.$set("width",`${e.offsetWidth}px`)},onExiting:e=>{e.$set("width","0px")},onExited:e=>{e.$remove("width")},onExitCancel:e=>{e.$set("width",`${e.offsetWidth}px`)}};function I(e){const t=$(e,G),{children:s}=t,n=x("badge"),o=v(n,t),a=R(t),i=F(t);return r.jsxs("span",{className:o.root,style:a.root,children:[s,j(i)&&!!i.length&&r.jsx("sup",{className:o.indicator,style:a.indicator,children:r.jsx(M,{classNames:`${n}-scroll-group-motion`,...H,children:i.map(u=>r.jsx("span",{className:`${n}-scroll-group`,children:u.scroll?r.jsx(O,{char:u.char}):u.char},u.key))})})]})}function P(e){return r.jsx("div",{children:"badge.ribbon"})}const p=Object.assign(I,{Ribbon:P});function z(){return r.jsxs(f,{children:[r.jsx(p,{count:12,children:r.jsx(l,{children:"Badge"})}),r.jsx(p,{count:23,children:r.jsx(l,{children:"Badge"})})]})}function L(){const[e,t]=d.useState(12);return r.jsx(f,{children:r.jsx(p,{count:e,children:r.jsx(l,{onClick:()=>{t(~~(Math.random()*100))},children:"Badge"})})})}function it(){return r.jsxs("div",{className:"source-container",children:[r.jsx(C,{items:[{title:"基本用法",rawText:`\`\`\`tsx
import { Badge, Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space>
      <Badge count={12}>
        <Button>Badge</Button>
      </Badge>
      <Badge count={23}>
        <Button>Badge</Button>
      </Badge>
    </Space>
  )
}
\`\`\`
`,desc:{"zh-CN":"基本","en-US":"basic"},element:r.jsx(z,{})},{title:"随机",rawText:`\`\`\`tsx
import { Badge, Button, Space } from '@ink-ui/core'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(12)
  return (
    <Space>
      <Badge count={count}>
        <Button onClick={() => {
          setCount(~~(Math.random() * 100))
        }}
        >
          Badge
        </Button>
      </Badge>
    </Space>
  )
}
\`\`\`
`,desc:{"zh-CN":"随机","en-US":"basic"},element:r.jsx(L,{})}]}),r.jsx(B,{rawText:`

## API
`})]})}export{it as default};
