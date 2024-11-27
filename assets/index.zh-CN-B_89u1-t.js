import{S as e,M as r}from"./index-CEPd8RRj.js";import{S as t}from"./index-SMIY3lp4.js";import{C as o}from"./index-SEEsNxV8.js";import{A as m,a as i}from"./iuv_e1599782e7fe19321ca4e36b3d47c1dd_salt_27-BRKtDM7R.js";import{j as n}from"./index-Dljg3swt.js";import"./index-BKo4-nQ-.js";import"./flatten-children-CS_oHsL4.js";import"./index-ZCWwBcXN.js";import"./index-D3kRMd6D.js";import"./pick-BK4giCUn.js";function h(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(r,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(o,{items:[{desc:{"zh-CN":`基础用法

`,"en-US":`基础用法 en

\`\`\`tsx
import { Form } from '@ink-ui/core'
import ema from '@ink-ui/emator'

function Input(props: any) {
  return <input {...props} value={props.value || ''} style={{ height: 32 }} />
}

export default function App() {
  return (
    <Form tag="div">
      <Form.Item
        label="username"
        name="username"
        rule={ema.string().min(3).max(7).required()}
      >
        <Input placeholder="username" />
      </Form.Item>
    </Form>
  )
}
\`\`\`
`},disabled:!1,element:n.jsx(m,{}),rawText:`\`\`\`tsx
import { Form } from '@ink-ui/core'
import ema from '@ink-ui/emator'

function Input(props: any) {
  return <input {...props} value={props.value || ''} style={{ height: 32 }} />
}

export default function App() {
  return (
    <Form tag="div">
      <Form.Item
        label="username"
        name="username"
        rule={ema.string().min(3).max(7).required()}
      >
        <Input placeholder="username" />
      </Form.Item>
    </Form>
  )
}
\`\`\`
`,title:"基本用法"}]})}),n.jsx(e,{title:"API",children:n.jsx(r,{rawText:`### Form Props

TODO`})}),n.jsx(e,{title:"Semantic DOM",children:n.jsx(t,{children:n.jsx(i,{})})}),n.jsx(e,{title:"FAQ",children:n.jsx(r,{rawText:`### Q1

qxxx`})})]})}export{h as default};
