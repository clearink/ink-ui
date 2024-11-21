import{C as t}from"./index-BopEiQD3.js";import{M as e}from"./index-A4eXEg1a.js";import{A as o,a,b as r}from"./ink-ui-virtual_EKKpYGpYjUs15vAz2mBSJQ___salt_5-Clr6e5YT.js";import{j as n}from"./index-CtQgf38W.js";import"./classnames-i4W5uzNT.js";import"./index-DjnRMsMa.js";import"./index-D8thIb-8.js";import"./preset_attrs-BM4CFZ4s.js";import"./index-ttufKTwy.js";import"./index-B9fKqLPe.js";import"./flatten-children-DvfXgxiR.js";import"./index-5R8QKYXC.js";import"./index-D_sGqRS4.js";function k(){return n.jsxs("div",{className:"source-container",children:[n.jsx(t,{items:[{title:"长按钮",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":"block","en-US":"block en-US"},element:n.jsx(o,{})},{title:"基本用法",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":"按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。","en-US":"按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。 en-US"},element:n.jsx(a,{})},{title:"危险",rawText:`\`\`\`tsx
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
`,desc:{"zh-CN":"danger","en-US":"danger en-US"},element:n.jsx(r,{})}]}),n.jsx(e,{rawText:`
## API

### Button Props

| 属性     | 描述     | 类型                                    | 默认值    | 版本 |
| -------- | -------- | --------------------------------------- | --------- | ---- |
| block    | 块级格式 | boolean                                 |           |      |
| disabled | 禁用     | boolean                                 |           |      |
| ghost    | 幽灵按钮 | boolean                                 |           |      |
| icon     | 图标     | ReactNode                               |           |      |
| loading  | 加载中   | boolean\\|\`{delay:number}\`               |           |      |
| shape    | 形状     | \`circle\`\\|\`default\`\\|\`round\`            | \`default\` |      |
| size     | 尺寸     | \`large\`\\|\`middle\`\\|\`small\`\\|\`undefined\` | \`middle\`  |      |
| theme    | 主题     |                                         |           |      |
| variant  | 变体     |                                         |           |      |

### ButtonGroup Props

| 属性     | 描述            | 类型 | 默认值 | 版本 |
| -------- | --------------- | ---- | ------ | ---- |
| children | React.ReactNode |      |        |      |
`})]})}export{k as default};
