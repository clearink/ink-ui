import Grid from '@comps/grid'
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

  const cols = _items.length > 1 ? 2 : 1

  const items = useMemo(() => _items.filter(_ => !_.disabled), [_items])

  return (
    <Grid.Row className={styles.code_block_list}>
      <Grid.Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={cols === 1 ? 24 : 12}
        xxl={cols === 1 ? 24 : 12}
        className={styles.list_column}
      >
        {items.filter((_, i) => i % cols === 0).map(item => (
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
      </Grid.Col>
      {items.length > 1 && (
        <Grid.Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={cols === 1 ? 24 : 12}
          xxl={cols === 1 ? 24 : 12}
          className={styles.list_column}
        >
          {items.filter((_, i) => i % cols === 1).map(item => (
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
        </Grid.Col>
      )}
    </Grid.Row>
  )
}
