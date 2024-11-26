import{u as b,S as i,C as f}from"./index-h6o6-_bL.js";import{M as l}from"./index-qUUzKsiW.js";import{S as j}from"./index-B6CQ-tme.js";import{n as h,T as g}from"./index-BxPhnewK.js";import{c as d,a as x,o as u,j as e,b as $,w as N,D as F,i as S}from"./index-BBhucVwM.js";function w(n,o){const{className:c}=o;return d(n,{},c)}const A=["children"];function P(n){const{children:o}=n,c=x("checkbox-group"),t=w(c,n),a=u(n,A);return e.jsxs("div",{...a,className:t,children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{children:o})]})}const T=$({cancelValue:h,registerValue:h});function _(n){const{checked:o,defaultChecked:c,onChange:t}=n;return b({defaultValue:c,onChange:t,value:o})}function D(n,o,c){const{className:t,indeterminate:a}=o,{checked:s,disabled:r}=c;return d(n,{[`${n}--checked`]:s,[`${n}--disabled`]:r,[`${n}--indeterminate`]:a},t)}const E=["autoFocus","children","disabled","checked","defaultChecked","indeterminate","onChange"];function v(n){const o=T.useState(),c=N({...n,disabled:n.disabled||o.disabled},{disabled:F.useState()}),{children:t,disabled:a}=c,s=x("checkbox"),[r,p]=_(c),k=D(s,c,{checked:r,disabled:a}),C=u(c,E);return e.jsx(g,{component:"Checkbox",disabled:r,selector:`.${s}__input`,children:e.jsxs("label",{...C,className:k,children:[e.jsx("input",{className:`${s}__original`,checked:!!r,type:"checkbox",onChange:m=>{!a&&p(m.target.checked)}}),e.jsx("span",{className:`${s}__input`}),!S(t)&&e.jsx("span",{className:`${s}__label`,children:t})]})})}const y=Object.assign(v,{Group:P});function O(){const n=o=>{console.log(`checked = ${o}`)};return e.jsx(y,{onChange:n,children:"Checkbox"})}function V(){return e.jsx("div",{children:"todo"})}function z(){return e.jsxs("div",{className:"source-container",children:[e.jsx(i,{title:"何时使用",children:e.jsx(l,{rawText:`<p>随你</p>
`})}),e.jsx(i,{title:"代码演示",children:e.jsx(f,{items:[{title:"基本用法",rawText:`\`\`\`tsx
import type { CheckboxProps } from '@ink-ui/core'

import { Checkbox } from '@ink-ui/core'
import React from 'react'

export default function App() {
  const onChange: CheckboxProps['onChange'] = (checked) => {
    console.log(\`checked = \${checked}\`)
  }
  return <Checkbox onChange={onChange}>Checkbox</Checkbox>
}
\`\`\`
`,desc:{"zh-CN":`中文说明

`,"en-US":`英文说明

\`\`\`tsx
import type { CheckboxProps } from '@ink-ui/core'

import { Checkbox } from '@ink-ui/core'
import React from 'react'

export default function App() {
  const onChange: CheckboxProps['onChange'] = (checked) => {
    console.log(\`checked = \${checked}\`)
  }
  return <Checkbox onChange={onChange}>Checkbox</Checkbox>
}
\`\`\`
`},element:e.jsx(O,{})}]})}),e.jsx(i,{title:"API",children:e.jsx(l,{rawText:`<h3>Checkbox Props</h3>
<p>TODO</p>
`})}),e.jsx(i,{title:"Semantic DOM",children:e.jsx(j,{children:e.jsx(V,{})})}),e.jsx(i,{title:"FAQ",children:e.jsx(l,{rawText:`<h3>Q1</h3>
<p>xxx</p>
<h3>Q2</h3>
<p>xxx</p>
`})})]})}export{z as default};
