import type { ReactElement } from 'react'

import { semanticNames } from '@comps/_shared/constants'
import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { betterDisplayName, flattenChildren, withDefaults } from '@comps/_shared/utils'
import { ConfigContext } from '@comps/config-provider/_shared/contexts'
import { fallback, omit } from '@internal/utils'
import { Fragment } from 'react'

import type { SpaceProps } from './props'

import useFormatClass from './hooks/use-format-class'
import useSpaceGutter from './hooks/use-space-gutter'
import { defaultSpaceProps } from './props'

const excluded = [
  'align',
  'direction',
  'size',
  'split',
  'wrap',
  'children',
  'split',
  ...semanticNames,
] as const

function Space(_props: SpaceProps) {
  const { space } = ConfigContext.useState()

  const props = withDefaults(_props, {
    ...defaultSpaceProps,
    size: fallback(space?.size, defaultSpaceProps.size),
  })

  const { children, size, split } = props

  const prefixCls = usePrefixCls('space')

  const classNames = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(props)

  // 水平 垂直 间距
  const [columnGap, rowGap] = useSpaceGutter(size, !!split)

  // 处理 children
  const contentNode = flattenChildren(children)
    .map((child, index, childList) => {
      const isEndItem = childList.length - index === 1
      const key = fallback((child as ReactElement)?.key, `${index}`)

      return (
        <Fragment key={key}>
          <div className={`${prefixCls}-item`}>{child}</div>
          {!!split && !isEndItem && (
            <span className={`${prefixCls}-item-split`}>
              {split}
            </span>
          )}
        </Fragment>
      )
    })

  return (
    <div
      {...omit(props, excluded)}
      className={classNames.root}
      style={{ ...styles.root, columnGap, rowGap }}
    >
      {contentNode}
    </div>
  )
}

betterDisplayName(Space)

export default Space
