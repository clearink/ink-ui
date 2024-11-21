import{C as n}from"./index-BopEiQD3.js";import{M as e}from"./index-A4eXEg1a.js";import{A as t}from"./ink-ui-virtual_WVTcCo7xd9nk19ZWhIpmrw___salt_7-B9u1daHO.js";import{j as r}from"./index-CtQgf38W.js";import"./classnames-i4W5uzNT.js";import"./index-DjnRMsMa.js";import"./index-D8thIb-8.js";import"./preset_attrs-BM4CFZ4s.js";import"./index-ttufKTwy.js";import"./flatten-children-DvfXgxiR.js";import"./index-CeCT7a-l.js";import"./node-equal-DdU5tx-g.js";import"./has-own-BpnzvHCN.js";import"./index-BUz7t1M-.js";function k(){return r.jsxs("div",{className:"source-container",children:[r.jsx(n,{items:[{title:"基本用法",rawText:`\`\`\`tsx
import { Form } from '@ink-ui/core'
import ema from '@ink-ui/emator'

function Input(props: any) {
  return <input {...props} value={props.value || ''} style={{ height: 32 }} />
}

export default function App() {
  return (
    <Form tag="div">
      <Form.Item
        label="username"
        name="username"
        rule={ema.string().min(3).max(7).required()}
      >
        <Input placeholder="username" />
      </Form.Item>
    </Form>
  )
}
\`\`\`
`,desc:{"zh-CN":"基础用法","en-US":"基础用法 en"},element:r.jsx(t,{})}]}),r.jsx(e,{rawText:`
## API
`})]})}export{k as default};
