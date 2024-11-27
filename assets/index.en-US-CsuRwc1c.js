import{S as e,C as t,a as o}from"./index-s4ZzZIox.js";import{M as c}from"./index-CopnDeHX.js";import{A as r,a as i,b as h,c as s}from"./iuv_a2bd1329fdbe88bf8bfa9b199a28f790_salt_21-B7rm4eOx.js";import{j as n}from"./index-BPKtIsx-.js";import"./index-Dze5A2QN.js";function p(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(c,{rawText:`<p>随你</p>
`})}),n.jsx(e,{title:"代码演示",children:n.jsx(t,{items:[{disabled:!1,title:"基本用法",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":`基本用法

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
`},element:n.jsx(r,{})},{disabled:!0,title:"禁用",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":`禁用

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
`},element:n.jsx(i,{})},{disabled:!1,title:"受控",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":`受控

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
`},element:n.jsx(h,{})}]})}),n.jsx(e,{title:"API",children:n.jsx(c,{rawText:`<h3>Checkbox Props</h3>
<p>TODO</p>
`})}),n.jsx(e,{title:"Semantic DOM",children:n.jsx(o,{children:n.jsx(s,{})})}),n.jsx(e,{title:"FAQ",children:n.jsx(c,{rawText:`<h3>Q1</h3>
<p>xxx</p>
<h3>Q2</h3>
<p>xxx</p>
`})})]})}export{p as default};
