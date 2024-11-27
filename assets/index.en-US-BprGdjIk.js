import{S as e,C as p,a as r}from"./index-Clxh1WW_.js";import{M as t}from"./index-uJEx2Fxh.js";import{A as o,a as i,b as s,c,d as a,e as l}from"./iuv_97cd31d00f19331395ea1c9ecdf4deff_salt_5-DqUpSpo-.js";import{j as n}from"./index-CaF6A5Ys.js";import"./index-KLqI4XCc.js";import"./index-DM_njd-X.js";import"./flatten-children-Bvv7DudK.js";function S(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:`<p>随你</p>
`})}),n.jsx(e,{title:"代码演示",children:n.jsx(p,{items:[{disabled:!1,title:"基本用法",rawText:`\`\`\`tsx
import { Alert } from '@ink-ui/core'

function App() {
  return (
    <Alert message="Success Text" type="info" showIcon />
  )
}

export default App
\`\`\`
`,desc:{"zh-CN":`警告提示，展现需要关注的信息，适用于简短的警告提示。

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
`},element:n.jsx(o,{})},{disabled:!1,title:"不同类型",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":`警告提示，展现需要关注的信息，适用于简短的警告提示。

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
`},element:n.jsx(i,{})},{disabled:!1,title:"可关闭",rawText:`\`\`\`tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert key={type} message={\`\${type} Text\`} type={type} showIcon closable />
      ))}
    </Space>
  )
}

export default App
\`\`\`
`,desc:{"zh-CN":`可关闭

`,"en-US":`xxx en

\`\`\`tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert key={type} message={\`\${type} Text\`} type={type} showIcon closable />
      ))}
    </Space>
  )
}

export default App
\`\`\`
`},element:n.jsx(s,{})},{disabled:!1,title:"含有描述",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":`描述

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
`},element:n.jsx(c,{})},{disabled:!1,title:"操作项",rawText:`\`\`\`tsx
import { Alert, Button, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={\`\${type} Text\`}
          type={type}
          showIcon
          closable
          action={<Button size="small" variant="filled">action</Button>}
        />
      ))}
    </Space>
  )
}

export default App
\`\`\`
`,desc:{"zh-CN":"通过 `action` 可以自定义右上角操作项。\n\n","en-US":`通过 \`action\` 可以自定义右上角操作项。

\`\`\`tsx
import { Alert, Button, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={\`\${type} Text\`}
          type={type}
          showIcon
          closable
          action={<Button size="small" variant="filled">action</Button>}
        />
      ))}
    </Space>
  )
}

export default App
\`\`\`
`},element:n.jsx(a,{})}]})}),n.jsx(e,{title:"API",children:n.jsx(t,{rawText:`<h3>Alert Props</h3>
<p>TODO</p>
`})}),n.jsx(e,{title:"Semantic DOM",children:n.jsx(r,{children:n.jsx(l,{})})}),n.jsx(e,{title:"FAQ",children:n.jsx(t,{rawText:`<h3>Q1</h3>
<p>xxx</p>
<h3>Q2</h3>
<p>xxx</p>
`})})]})}export{S as default};
