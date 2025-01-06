import { useMemo } from 'react'

import CodeBlock from '../code-block'
import styles from './style.module.scss'

export interface CodeBlockListProps {
  items: {
    desc: Record<string, string>
    disabled: boolean
    element: React.ReactNode
    rawText: string
    title: string
  }[]
}

export default function CodeBlockList(props: CodeBlockListProps) {
  const { items: _items } = props

  const items = useMemo(() => _items.filter(_ => !_.disabled), [_items])

  return (
    <div className={styles.code_block_list}>
      {items.map(item => (
        <CodeBlock
          key={item.title}
          title={item.title}
          rawText={item.rawText}
          desc={item.desc}
          className={styles.block_item}
        >
          {item.element}
        </CodeBlock>
      ))}
    </div>
  )
}
