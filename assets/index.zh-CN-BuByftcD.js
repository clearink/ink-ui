import{S as e,M as t}from"./index-CwDTuL7I.js";import{S as r}from"./index-DSYQUVEy.js";import{C as p}from"./index-CvzOteuv.js";import{A as o,a as i,b as s,c as a,d as c,e as l}from"./iuv_1f28ca408593dfd49ac6b4600f93064e_salt_5-Ki_eQRQ5.js";import{j as n}from"./index-DXrpuSMZ.js";import"./index-UjWuoH-M.js";import"./index-D03jR3sc.js";import"./flatten-children-DMI9SJVG.js";import"./status-CUoMKnqA.js";import"./index-XugLxV4P.js";import"./is-null-D6OXYL3N.js";function k(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(p,{items:[{desc:{"zh-CN":`警告提示，展现需要关注的信息，适用于简短的警告提示。

`,"en-US":`警告提示，展现需要关注的信息，适用于简短的警告提示。

xxx en

\`\`\`tsx
import { Alert } from '@ink-ui/core'

function App() {
  return (
    <Alert message="Success Text" type="info" showIcon />
  )
}

export default App
\`\`\`
`},disabled:!1,element:n.jsx(o,{}),rawText:`\`\`\`tsx
import { Alert } from '@ink-ui/core'

function App() {
  return (
    <Alert message="Success Text" type="info" showIcon />
  )
}

export default App
\`\`\`
`,title:"基本用法"},{desc:{"zh-CN":`警告提示，展现需要关注的信息，适用于简短的警告提示。

`,"en-US":`警告提示，展现需要关注的信息，适用于简短的警告提示。

xxx en

\`\`\`tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert key={type} message={\`\${type} Text\`} type={type} showIcon />
      ))}
    </Space>
  )
}

export default App
\`\`\`
`},disabled:!1,element:n.jsx(i,{}),rawText:`\`\`\`tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert key={type} message={\`\${type} Text\`} type={type} showIcon />
      ))}
    </Space>
  )
}

export default App
\`\`\`
`,title:"不同类型"},{desc:{"zh-CN":`可关闭

`,"en-US":`xxx en

\`\`\`tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <div>
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={\`\${type} Text\`}
          type={type}
          showIcon
          closable
          style={{ marginBottom: 8 }}
        />
      ))}
    </div>
  )
}

export default App
\`\`\`
`},disabled:!1,element:n.jsx(s,{}),rawText:`\`\`\`tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <div>
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={\`\${type} Text\`}
          type={type}
          showIcon
          closable
          style={{ marginBottom: 8 }}
        />
      ))}
    </div>
  )
}

export default App
\`\`\`
`,title:"可关闭"},{desc:{"zh-CN":`描述

`,"en-US":`xxx en

\`\`\`tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={\`\${type} Text\`}
          description="Description text"
          type={type}
          showIcon
        />
      ))}
    </Space>
  )
}

export default App
\`\`\`
`},disabled:!1,element:n.jsx(a,{}),rawText:`\`\`\`tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={\`\${type} Text\`}
          description="Description text"
          type={type}
          showIcon
        />
      ))}
    </Space>
  )
}

export default App
\`\`\`
`,title:"含有描述"},{desc:{"zh-CN":"通过 `action` 可以自定义右上角操作项。\n\n","en-US":`通过 \`action\` 可以自定义右上角操作项。

\`\`\`tsx
import { Alert, Button, Space } from '@ink-ui/core'

function App() {
  return (
    <div>
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={\`\${type} Text\`}
          type={type}
          showIcon
          closable
          action={<Button size="small" variant="filled">action</Button>}
          style={{ marginBottom: 8 }}
        />
      ))}
    </div>
  )
}

export default App
\`\`\`
`},disabled:!1,element:n.jsx(c,{}),rawText:`\`\`\`tsx
import { Alert, Button, Space } from '@ink-ui/core'

function App() {
  return (
    <div>
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={\`\${type} Text\`}
          type={type}
          showIcon
          closable
          action={<Button size="small" variant="filled">action</Button>}
          style={{ marginBottom: 8 }}
        />
      ))}
    </div>
  )
}

export default App
\`\`\`
`,title:"操作项"}]})}),n.jsx(e,{title:"API",children:n.jsx(t,{rawText:`### Alert Props

TODO`})}),n.jsx(e,{title:"Semantic DOM",children:n.jsx(r,{children:n.jsx(l,{})})}),n.jsx(e,{title:"FAQ",children:n.jsx(t,{rawText:`### Q1

xxx

### Q2

xxx`})})]})}export{k as default};
