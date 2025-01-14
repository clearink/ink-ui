import{S as e,M as t}from"./index-BJE1TdT-.js";import{S as c}from"./index-eamLPQ_s.js";import{C as o}from"./index-BxzkuJ8z.js";import{A as r,a as i,b as s,c as x}from"./iuv_7316415f7351907f8f06741334d0500f_salt_13-CjIdd3KF.js";import{j as n}from"./index-DwddvrhG.js";import"./index-olX8USnx.js";function C(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(o,{items:[{desc:{"zh-CN":`基本用法

`,"en-US":`基本用法

\`\`\`tsx
import { Checkbox } from '@ink-ui/core'

export default function App() {
  return (
    <Checkbox
      onChange={(checked) => {
        console.log(\`checked = \${checked}\`)
      }}
    >
      Checkbox
    </Checkbox>
  )
}
\`\`\`
`},disabled:!1,element:n.jsx(r,{}),rawText:`\`\`\`tsx
import { Checkbox } from '@ink-ui/core'

export default function App() {
  return (
    <Checkbox
      onChange={(checked) => {
        console.log(\`checked = \${checked}\`)
      }}
    >
      Checkbox
    </Checkbox>
  )
}
\`\`\`
`,title:"基本用法"},{desc:{"zh-CN":`禁用

`,"en-US":`禁用

\`\`\`tsx
import { Checkbox } from '@ink-ui/core'

export default function App() {
  return (
    <Checkbox
      disabled
      onChange={(checked) => {
        console.log(\`checked = \${checked}\`)
      }}
    >
      Checkbox
    </Checkbox>
  )
}
\`\`\`
`},disabled:!0,element:n.jsx(i,{}),rawText:`\`\`\`tsx
import { Checkbox } from '@ink-ui/core'

export default function App() {
  return (
    <Checkbox
      disabled
      onChange={(checked) => {
        console.log(\`checked = \${checked}\`)
      }}
    >
      Checkbox
    </Checkbox>
  )
}
\`\`\`
`,title:"禁用"},{desc:{"zh-CN":`受控

`,"en-US":`受控

\`\`\`tsx
import { Button, Checkbox } from '@ink-ui/core'
import { useState } from 'react'

export default function App() {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <Checkbox checked={checked}>
        Checkbox
      </Checkbox>
      <div style={{ marginTop: 24 }}>
        <Button variant="filled" onClick={() => { setChecked(!checked) }}>
          Check
        </Button>
      </div>
    </div>
  )
}
\`\`\`
`},disabled:!1,element:n.jsx(s,{}),rawText:`\`\`\`tsx
import { Button, Checkbox } from '@ink-ui/core'
import { useState } from 'react'

export default function App() {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <Checkbox checked={checked}>
        Checkbox
      </Checkbox>
      <div style={{ marginTop: 24 }}>
        <Button variant="filled" onClick={() => { setChecked(!checked) }}>
          Check
        </Button>
      </div>
    </div>
  )
}
\`\`\`
`,title:"受控"}]})}),n.jsx(e,{title:"API",children:n.jsx(t,{rawText:`### Checkbox Props

TODO`})}),n.jsx(e,{title:"Semantic DOM",children:n.jsx(c,{children:n.jsx(x,{})})}),n.jsx(e,{title:"FAQ",children:n.jsx(t,{rawText:`### Q1

xxx

### Q2

xxx`})})]})}export{C as default};
