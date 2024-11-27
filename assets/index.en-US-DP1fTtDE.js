import{S as e,M as t}from"./index-CEPd8RRj.js";import{C as a}from"./index-SEEsNxV8.js";import{A as s}from"./iuv_19a2341a0d64dc68eb8456185581e94d_salt_22-CKj4OSSC.js";import{j as n}from"./index-Dljg3swt.js";import"./index-BKo4-nQ-.js";import"./keyboard-DDjTZLpe.js";import"./pick-BK4giCUn.js";function c(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(a,{items:[{desc:{},disabled:!1,element:n.jsx(s,{}),rawText:`\`\`\`tsx
import { Collapse } from '@ink-ui/core'

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`
const items = [
  {
    name: '1',
    title: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    name: '2',
    title: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    name: '3',
    title: 'This is panel header 3',
    children: <p>{text}</p>,
  },
]

export default function App() {
  const onChange = (expandName, expandedNames) => {
    console.log(expandName, expandedNames)
  }

  return <Collapse items={items} defaultExpandedNames={['1']} onChange={onChange} />
}
\`\`\`
`,title:"基础用法"}]})})]})}export{c as default};
