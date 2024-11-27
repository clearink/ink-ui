import{S as e,C as t,a as o}from"./index-Clxh1WW_.js";import{M as r}from"./index-uJEx2Fxh.js";import{A as m,a as i}from"./iuv_e1599782e7fe19321ca4e36b3d47c1dd_salt_26-L2O-u-zo.js";import{j as n}from"./index-CaF6A5Ys.js";import"./index-KLqI4XCc.js";import"./flatten-children-Bvv7DudK.js";import"./index-D7K1Oe4U.js";function d(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(r,{rawText:`<p>随你</p>
`})}),n.jsx(e,{title:"代码演示",children:n.jsx(t,{items:[{disabled:!1,title:"基本用法",rawText:`\`\`\`tsx
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
`})})]})}export{d as default};
