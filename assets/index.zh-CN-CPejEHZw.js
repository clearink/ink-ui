import{C as r}from"./index-Byy-oVhe.js";import{M as e}from"./style-CFyc4qC2.js";import{A as o}from"./ink-ui-virtual_WVTcCo7xd9nk19ZWhIpmrw___salt_4-C8Zuwks_.js";import{j as n}from"./index-9ySk9-rV.js";import"./noop-DX6rZLP_.js";import"./flatten-children-CQedzpj6.js";function u(){return n.jsxs("div",{className:"source-container",children:[n.jsx(r,{title:"基本用法",rawText:`\`\`\`tsx
import { Form } from '@ink-ui/core'
import iuv from '@ink-ui/validator'

function Input(props: any) {
  return <input {...props} value={props.value || ''} style={{ height: 32 }} />
}

export default function App() {
  return (
    <Form tag="div">
      {Array.from({ length: 3000 }, (_, i) => (
        <Form.Item
          key={i}
          label={\`username-\${i}\`}
          name={['username', i]}
          rule={iuv.string().min(3).max(7).required()}
        >
          <Input placeholder={\`username-\${i}\`} />
        </Form.Item>
      ))}
    </Form>
  )
}
\`\`\`
`,children:n.jsx(o,{})}),n.jsx(e,{rawText:`
## API
`})]})}export{u as default};
