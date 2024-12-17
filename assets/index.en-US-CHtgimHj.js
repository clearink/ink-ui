import{S as t,M as e}from"./index-DHzDcS3k.js";import{S as o}from"./index-Blh_sL3O.js";import{C as a}from"./index-C8ntozhB.js";import{A as r,a as u,b as i,c}from"./iuv_97574e6557d5a6da0a08b00530a569ae_salt_3-C7jmJ7jM.js";import{j as n}from"./index-BbnHgTEh.js";import"./index-CqwDhlqj.js";import"./index-Cey7SOCf.js";import"./flatten-children-t69O8MW5.js";import"./index-P3FQR_6v.js";import"./reflow-ChnV4Pvj.js";function j(){return n.jsxs("div",{className:"source-container",children:[n.jsx(t,{title:"何时使用",children:n.jsx(e,{rawText:"随你"})}),n.jsx(t,{title:"代码演示",children:n.jsx(a,{items:[{desc:{"zh-CN":`基本

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
`},disabled:!1,element:n.jsx(r,{}),rawText:`\`\`\`tsx
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
`,title:"基本用法"},{desc:{"zh-CN":`随机

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
`},disabled:!1,element:n.jsx(u,{}),rawText:`\`\`\`tsx
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
`,title:"随机"},{desc:{"zh-CN":`红点

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
`},disabled:!0,element:n.jsx(i,{}),rawText:`\`\`\`tsx
import { Badge, Button } from '@ink-ui/core'

export default function App() {
  return (
    <Badge dot count={1}>
      <Button>Badge</Button>
    </Badge>
  )
}
\`\`\`
`,title:"红点"}]})}),n.jsx(t,{title:"API",children:n.jsx(e,{rawText:`### Badge Props

TODO`})}),n.jsx(t,{title:"Semantic DOM",children:n.jsx(o,{children:n.jsx(c,{})})}),n.jsx(t,{title:"FAQ",children:n.jsx(e,{rawText:`### Q1

qxxx`})})]})}export{j as default};
