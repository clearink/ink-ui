import{S as e,M as r}from"./index-DHzDcS3k.js";import{S as t}from"./index-Blh_sL3O.js";import{C as o}from"./index-C8ntozhB.js";import{A as m,a as i,b as a}from"./iuv_fd2bd821c62a75fa65372790bcf42136_salt_31-Dj9QfSnO.js";import{j as n}from"./index-BbnHgTEh.js";import"./index-CqwDhlqj.js";import"./index-DGKhS0SI.js";import"./flatten-children-t69O8MW5.js";import"./index-P3FQR_6v.js";import"./pick-BK4giCUn.js";import"./is-null-D6OXYL3N.js";function j(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(r,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(o,{items:[{desc:{"zh-CN":`基础用法

`,"en-US":`基础用法 en

\`\`\`tsx
import { Form } from '@ink-ui/core'

function Input(props: any) {
  return <input {...props} value={props.value || ''} style={{ height: 32 }} />
}

export default function App() {
  return (
    <Form>
      <Form.Item
        label="username"
        name="username"
      >
        <Input placeholder="username" />
      </Form.Item>
    </Form>
  )
}
\`\`\`
`},disabled:!1,element:n.jsx(m,{}),rawText:`\`\`\`tsx
import { Form } from '@ink-ui/core'

function Input(props: any) {
  return <input {...props} value={props.value || ''} style={{ height: 32 }} />
}

export default function App() {
  return (
    <Form>
      <Form.Item
        label="username"
        name="username"
      >
        <Input placeholder="username" />
      </Form.Item>
    </Form>
  )
}
\`\`\`
`,title:"基本用法"},{desc:{"zh-CN":"使用 `@ink-ui/emator` 可以获得类似 `zod`, `joi` 之类的开发体验\n\n","en-US":`使用 \`@ink-ui/emator\` 可以获得类似 \`zod\`, \`joi\` 之类的开发体验

\`\`\`tsx
import { Button, Form } from '@ink-ui/core'
import ema from '@ink-ui/emator'

function Input(props: any) {
  return <input {...props} value={props.value || ''} style={{ height: 32 }} />
}

export default function App() {
  return (
    <Form
      onFinish={(values) => {
        console.log('finish', values)
      }}
      onFailed={(values) => {
        console.log('failed', values)
      }}
    >
      <Form.Item
        label="username"
        name="username"
        rule={ema.string().min(3).max(7).required()}
      >
        <Input placeholder="username" />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rule={ema.string().email().required()}
      >
        <Input placeholder="username" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2 }}>
        <Button type="submit">submit</Button>
      </Form.Item>
    </Form>
  )
}
\`\`\`
`},disabled:!1,element:n.jsx(i,{}),rawText:`\`\`\`tsx
import { Button, Form } from '@ink-ui/core'
import ema from '@ink-ui/emator'

function Input(props: any) {
  return <input {...props} value={props.value || ''} style={{ height: 32 }} />
}

export default function App() {
  return (
    <Form
      onFinish={(values) => {
        console.log('finish', values)
      }}
      onFailed={(values) => {
        console.log('failed', values)
      }}
    >
      <Form.Item
        label="username"
        name="username"
        rule={ema.string().min(3).max(7).required()}
      >
        <Input placeholder="username" />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rule={ema.string().email().required()}
      >
        <Input placeholder="username" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2 }}>
        <Button type="submit">submit</Button>
      </Form.Item>
    </Form>
  )
}
\`\`\`
`,title:"数据校验"}]})}),n.jsx(e,{title:"API",children:n.jsx(r,{rawText:`### Form Props

TODO`})}),n.jsx(e,{title:"Semantic DOM",children:n.jsx(t,{children:n.jsx(a,{})})}),n.jsx(e,{title:"FAQ",children:n.jsx(r,{rawText:`### Q1

qxxx`})})]})}export{j as default};