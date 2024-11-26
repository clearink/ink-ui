import{S as n,C as d}from"./index-h6o6-_bL.js";import{M as e}from"./index-qUUzKsiW.js";import{S as o}from"./index-B6CQ-tme.js";import{A as a,a as r,b as u,c as i}from"./iuv_f512c642296fde660458fcf1d50ee64f_salt_8-B6ckj5aK.js";import{j as t}from"./index-BBhucVwM.js";import"./index-BxPhnewK.js";import"./index-C5pLwClu.js";import"./flatten-children-W8zz7SWo.js";function f(){return t.jsxs("div",{className:"source-container",children:[t.jsx(n,{title:"何时使用",children:t.jsx(e,{rawText:`<p>随你</p>
`})}),t.jsx(n,{title:"代码演示",children:t.jsx(d,{items:[{title:"长按钮",rawText:`\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <Button block variant="filled">
        Primary
      </Button>
      <Button block>Default</Button>
      <Button block variant="dashed">
        Dashed
      </Button>
      <Button block disabled>
        disabled
      </Button>
      <Button block variant="text">
        text
      </Button>
      <Button block variant="link">
        Link
      </Button>
    </Space>
  )
}
\`\`\`
`,desc:{"zh-CN":`block

`,"en-US":`block en-US

\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <Button block variant="filled">
        Primary
      </Button>
      <Button block>Default</Button>
      <Button block variant="dashed">
        Dashed
      </Button>
      <Button block disabled>
        disabled
      </Button>
      <Button block variant="text">
        text
      </Button>
      <Button block variant="link">
        Link
      </Button>
    </Space>
  )
}
\`\`\`
`},element:t.jsx(a,{})},{title:"基本用法",rawText:`\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space wrap>
      <Button variant="filled">Primary Button</Button>
      <Button>Default Button</Button>
      <Button variant="dashed">Dashed Button</Button>
      <Button variant="text">Text Button</Button>
    </Space>
  )
}
\`\`\`
`,desc:{"zh-CN":`按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。

`,"en-US":`按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。 en-US

\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space wrap>
      <Button variant="filled">Primary Button</Button>
      <Button>Default Button</Button>
      <Button variant="dashed">Dashed Button</Button>
      <Button variant="text">Text Button</Button>
    </Space>
  )
}
\`\`\`
`},element:t.jsx(r,{})},{title:"危险",rawText:`\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space wrap>
      <Button theme="danger" variant="filled">
        Primary
      </Button>
      <Button theme="danger">Default</Button>
      <Button theme="danger" variant="dashed">
        Dashed
      </Button>
      <Button theme="danger" variant="text">
        Text
      </Button>
    </Space>
  )
}
\`\`\`
`,desc:{"zh-CN":`danger

`,"en-US":`danger en-US

\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space wrap>
      <Button theme="danger" variant="filled">
        Primary
      </Button>
      <Button theme="danger">Default</Button>
      <Button theme="danger" variant="dashed">
        Dashed
      </Button>
      <Button theme="danger" variant="text">
        Text
      </Button>
    </Space>
  )
}
\`\`\`
`},element:t.jsx(u,{})}]})}),t.jsx(n,{title:"API",children:t.jsx(e,{rawText:`<h3>Button Props</h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody><tr>
<td>block</td>
<td>块级格式</td>
<td>boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>ghost</td>
<td>幽灵按钮</td>
<td>boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>图标</td>
<td>ReactNode</td>
<td></td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>加载中</td>
<td>boolean|<code>{delay:number}</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>shape</td>
<td>形状</td>
<td><code>circle</code>|<code>default</code>|<code>round</code></td>
<td><code>default</code></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>尺寸</td>
<td><code>large</code>|<code>middle</code>|<code>small</code>|<code>undefined</code></td>
<td><code>middle</code></td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>主题</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>variant</td>
<td>变体</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody></table>
<h3>ButtonGroup Props</h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
<th>版本</th>
</tr>
</thead>
<tbody><tr>
<td>children</td>
<td>React.ReactNode</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody></table>
`})}),t.jsx(n,{title:"Semantic DOM",children:t.jsx(o,{children:t.jsx(i,{})})}),t.jsx(n,{title:"FAQ",children:t.jsx(e,{rawText:`<h3>Q1</h3>
<p>xxx</p>
<h3>Q2</h3>
<p>xxx</p>
`})})]})}export{f as default};
