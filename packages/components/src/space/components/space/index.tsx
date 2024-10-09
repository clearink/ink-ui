import type { ReactElement } from 'react'

import { usePrefixCls } from '@comps/_shared/hooks'
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
] as const

function Space(_props: SpaceProps) {
  const { space } = ConfigContext.useState()

  const props = withDefaults(_props, {
    ...defaultSpaceProps,
    size: fallback(space?.size, defaultSpaceProps.size),
  })

  const { children, size, split, style } = props

  const prefixCls = usePrefixCls('space')

  const classes = useFormatClass(prefixCls, props)

  // 水平 垂直 间距
  const [h, v] = useSpaceGutter(size, !!split)

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

  const attrs = omit(props, excluded)

  return (
    <div {...attrs} className={classes} style={{ columnGap: h, rowGap: v, ...style }}>
      {contentNode}
    </div>
  )
}

betterDisplayName(Space)

export default Space
