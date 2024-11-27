import{S as t,C as o,a}from"./index-s4ZzZIox.js";import{M as e}from"./index-CopnDeHX.js";import{A as u,a as r,b as c,c as i}from"./iuv_ba1262dd0c7828233dfac812a9323dd6_salt_9-CArQBx7z.js";import{j as n}from"./index-BPKtIsx-.js";import"./index-Dze5A2QN.js";import"./index-BetNNbXm.js";import"./flatten-children-QJ786vjE.js";import"./index-BS8gr_4h.js";function f(){return n.jsxs("div",{className:"source-container",children:[n.jsx(t,{title:"何时使用",children:n.jsx(e,{rawText:`<p>随你</p>
`})}),n.jsx(t,{title:"代码演示",children:n.jsx(o,{items:[{disabled:!1,title:"基本用法",rawText:`\`\`\`tsx
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
`},element:n.jsx(u,{})},{disabled:!1,title:"随机",rawText:`\`\`\`tsx
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
`},element:n.jsx(r,{})},{disabled:!0,title:"红点",rawText:`\`\`\`tsx
import { Badge, Button } from '@ink-ui/core'

export default function App() {
  return (
    <Badge dot count={1}>
      <Button>Badge</Button>
    </Badge>
  )
}
\`\`\`
`,desc:{"zh-CN":`红点

`,"en-US":`红点

\`\`\`tsx
import { Badge, Button } from '@ink-ui/core'

export default function App() {
  return (
    <Badge dot count={1}>
      <Button>Badge</Button>
    </Badge>
  )
}
\`\`\`
`},element:n.jsx(c,{})}]})}),n.jsx(t,{title:"API",children:n.jsx(e,{rawText:`<h3>Badge Props</h3>
<p>TODO</p>
`})}),n.jsx(t,{title:"Semantic DOM",children:n.jsx(a,{children:n.jsx(i,{})})}),n.jsx(t,{title:"FAQ",children:n.jsx(e,{rawText:`<h3>Q1</h3>
<p>qxxx</p>
`})})]})}export{f as default};
