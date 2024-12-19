import{S as e,M as t}from"./index-CCq3zGJd.js";import{S as r}from"./index-CPP0EHVK.js";import{C as p}from"./index-BnmwbkTk.js";import{A as o,a as i,b as s,c as a,d as c,e as l}from"./iuv_97cd31d00f19331395ea1c9ecdf4deff_salt_21-qmOEsNKF.js";import{j as n}from"./index-x9Tw_J00.js";import"./index-Ddq968lt.js";import"./index-CGvZXIBR.js";import"./flatten-children-sjc8H7Z-.js";import"./status-u7zFuvx_.js";import"./index-Bh-IgqCB.js";import"./is-null-D6OXYL3N.js";function k(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(p,{items:[{desc:{"zh-CN":`警告提示，展现需要关注的信息，适用于简短的警告提示。

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
