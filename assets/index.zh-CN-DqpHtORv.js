import{C as n}from"./index-DdocyDJ_.js";import{M as e}from"./style-f4HXkhX5.js";import{A as r}from"./2ig___salt_3-BRW5e8oc.js";import{j as o}from"./index-DCi0LQqD.js";import"./noop-DX6rZLP_.js";function s(){return o.jsxs("div",{className:"source-container",children:[o.jsx(n,{title:"基本用法",rawText:`\`\`\`tsx
import type { CheckboxProps } from '@ink-ui/core'

import { Checkbox } from '@ink-ui/core'
import React from 'react'

export default function App() {
  const onChange: CheckboxProps['onChange'] = (checked) => {
    console.log(\`checked = \${checked}\`)
  }
  return <Checkbox onChange={onChange}>Checkbox</Checkbox>
}
\`\`\`
`,children:o.jsx(r,{})}),o.jsx(e,{rawText:`
## API
`})]})}export{s as default};
