import{S as t,C as o}from"./index-h6o6-_bL.js";import{M as e}from"./index-qUUzKsiW.js";import{S as a}from"./index-B6CQ-tme.js";import{A as r,a as u,b as c}from"./iuv_ba1262dd0c7828233dfac812a9323dd6_salt_4-Dtl6Z0aL.js";import{j as n}from"./index-BBhucVwM.js";import"./index-BxPhnewK.js";import"./index-C5pLwClu.js";import"./flatten-children-W8zz7SWo.js";import"./index-CNRAa_B3.js";function S(){return n.jsxs("div",{className:"source-container",children:[n.jsx(t,{title:"何时使用",children:n.jsx(e,{rawText:`<p>随你</p>
`})}),n.jsx(t,{title:"代码演示",children:n.jsx(o,{items:[{title:"基本用法",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":`基本

`,"en-US":`basic

\`\`\`tsx
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
`},element:n.jsx(r,{})},{title:"随机",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":`随机

`,"en-US":`basic

\`\`\`tsx
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
`},element:n.jsx(u,{})}]})}),n.jsx(t,{title:"API",children:n.jsx(e,{rawText:`<h3>Badge Props</h3>
<p>TODO</p>
`})}),n.jsx(t,{title:"Semantic DOM",children:n.jsx(a,{children:n.jsx(c,{})})}),n.jsx(t,{title:"FAQ",children:n.jsx(e,{rawText:`<h3>Q1</h3>
<p>qxxx</p>
`})})]})}export{S as default};
