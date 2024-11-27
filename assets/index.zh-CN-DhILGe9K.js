import{S as t,C as a,a as d}from"./index-s4ZzZIox.js";import{M as e}from"./index-CopnDeHX.js";import{A as o,a as r,b as i,c as u,d as l,e as c,f as p,g as s}from"./iuv_f512c642296fde660458fcf1d50ee64f_salt_17-DZuO5Uea.js";import{j as n}from"./index-BPKtIsx-.js";import"./index-Dze5A2QN.js";import"./index-BetNNbXm.js";import"./flatten-children-QJ786vjE.js";function k(){return n.jsxs("div",{className:"source-container",children:[n.jsx(t,{title:"何时使用",children:n.jsx(e,{rawText:`<p>随你</p>
`})}),n.jsx(t,{title:"代码演示",children:n.jsx(a,{items:[{disabled:!1,title:"基本用法",rawText:`\`\`\`tsx
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
`},element:n.jsx(o,{})},{disabled:!1,title:"图标按钮",rawText:"```tsx\nexport default function App() {\n      return <div>建设中,敬请期待!</div>\n    }```",desc:{"zh-CN":"TODO","en-US":"TODO"},element:n.jsx(r,{})},{disabled:!1,title:"按钮形状",rawText:`\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space>
      <Button variant="filled">Button</Button>
      <Button shape="circle" variant="filled">Btn</Button>
      <Button shape="round" variant="filled">Button</Button>
    </Space>
  )
}
\`\`\`
`,desc:{"zh-CN":"Button 有多种形状, `default` - 长方形**(默认)**, `circle` - 圆形, `round` - 圆角\n\n","en-US":`Button 有多种形状, \`default\` - 长方形**(默认)**, \`circle\` - 圆形, \`round\` - 圆角

\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space>
      <Button variant="filled">Button</Button>
      <Button shape="circle" variant="filled">Btn</Button>
      <Button shape="round" variant="filled">Button</Button>
    </Space>
  )
}
\`\`\`
`},element:n.jsx(i,{})},{disabled:!1,title:"按钮尺寸",rawText:`\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space>
      <Button size="small" variant="filled">small</Button>
      <Button variant="filled">middle</Button>
      <Button size="large" variant="filled">large</Button>
    </Space>
  )
}
\`\`\`
`,desc:{"zh-CN":"按钮分为：`small`、`middle`、`large` 三种尺寸。\n\n","en-US":`按钮分为：\`small\`、\`middle\`、\`large\` 三种尺寸。

\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <Space>
      <Button size="small" variant="filled">small</Button>
      <Button variant="filled">middle</Button>
      <Button size="large" variant="filled">large</Button>
    </Space>
  )
}
\`\`\`
`},element:n.jsx(u,{})},{disabled:!1,title:"按钮状态",rawText:`\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <>
      {['filled', 'dashed', 'link', 'outlined', 'text'].map(variant => (
        <div key={variant} style={{ marginBottom: 16 }}>
          <Space>
            {['danger', 'info', 'primary', 'success', 'warning'].map(theme => (
              <Button key={theme} variant={variant} theme={theme}>
                {theme}
              </Button>
            ))}
          </Space>
        </div>
      ))}
    </>
  )
}
\`\`\`
`,desc:{"zh-CN":"按钮分为：`danger`、`info`、`primary`、`success`、`warning` 五种状态。\n\n","en-US":`按钮分为：\`danger\`、\`info\`、\`primary\`、\`success\`、\`warning\` 五种状态。

\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <>
      {['filled', 'dashed', 'link', 'outlined', 'text'].map(variant => (
        <div key={variant} style={{ marginBottom: 16 }}>
          <Space>
            {['danger', 'info', 'primary', 'success', 'warning'].map(theme => (
              <Button key={theme} variant={variant} theme={theme}>
                {theme}
              </Button>
            ))}
          </Space>
        </div>
      ))}
    </>
  )
}
\`\`\`
`},element:n.jsx(l,{})},{disabled:!0,title:"禁用按钮",rawText:`\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <>
      {['filled', 'dashed', 'link', 'outlined', 'text'].map(variant => (
        <div key={variant} style={{ marginBottom: 16 }}>
          <Space>
            {['danger', 'info', 'primary', 'success', 'warning'].map(theme => (
              <Button key={theme} variant={variant} theme={theme} disabled>
                {theme}
              </Button>
            ))}
          </Space>
        </div>
      ))}
    </>
  )
}
\`\`\`
`,desc:{"zh-CN":`按钮被禁用。

`,"en-US":`按钮被禁用。

\`\`\`tsx
import { Button, Space } from '@ink-ui/core'

export default function App() {
  return (
    <>
      {['filled', 'dashed', 'link', 'outlined', 'text'].map(variant => (
        <div key={variant} style={{ marginBottom: 16 }}>
          <Space>
            {['danger', 'info', 'primary', 'success', 'warning'].map(theme => (
              <Button key={theme} variant={variant} theme={theme} disabled>
                {theme}
              </Button>
            ))}
          </Space>
        </div>
      ))}
    </>
  )
}
\`\`\`
`},element:n.jsx(c,{})},{disabled:!1,title:"长按钮",rawText:`\`\`\`tsx
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
`},element:n.jsx(p,{})}]})}),n.jsx(t,{title:"API",children:n.jsx(e,{rawText:`<h3>Button Props</h3>
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
`})}),n.jsx(t,{title:"Semantic DOM",children:n.jsx(d,{children:n.jsx(s,{})})}),n.jsx(t,{title:"FAQ",children:n.jsx(e,{rawText:`<h3>Q1</h3>
<p>xxx</p>
<h3>Q2</h3>
<p>xxx</p>
`})})]})}export{k as default};
