import{S as e,C as t}from"./index-h6o6-_bL.js";import{M as r}from"./index-qUUzKsiW.js";import{S as o}from"./index-B6CQ-tme.js";import{A as m,a as i}from"./iuv_e1599782e7fe19321ca4e36b3d47c1dd_salt_12-BisQmJIA.js";import{j as n}from"./index-BBhucVwM.js";import"./index-BxPhnewK.js";import"./flatten-children-W8zz7SWo.js";import"./index-CNRAa_B3.js";function h(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(r,{rawText:`<p>随你</p>
`})}),n.jsx(e,{title:"代码演示",children:n.jsx(t,{items:[{title:"基本用法",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":`基础用法

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
`},element:n.jsx(m,{})}]})}),n.jsx(e,{title:"API",children:n.jsx(r,{rawText:`<h3>Form Props</h3>
<p>TODO</p>
`})}),n.jsx(e,{title:"Semantic DOM",children:n.jsx(o,{children:n.jsx(i,{})})}),n.jsx(e,{title:"FAQ",children:n.jsx(r,{rawText:`<h3>Q1</h3>
<p>qxxx</p>
`})})]})}export{h as default};
