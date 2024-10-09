import { usePrefixCls } from '@comps/_shared/hooks'
import { betterDisplayName, withDefaults } from '@comps/_shared/utils'

import type { PaginationProps } from './props'

import useFormatClass from './hooks/use-format-class'
import usePageChunk from './hooks/use-page-chunk'
import { defaultPaginationProps } from './props'

function Pagination(_props: PaginationProps) {
  const props = withDefaults(_props, defaultPaginationProps)

  const { onChange } = props

  const prefixCls = usePrefixCls('pagination')

  const classes = useFormatClass(prefixCls, props)

  const [_current, chunkCount] = usePageChunk(props)

  // 渲染 prev list next size jumper
  return (
    <div className={classes}>
      {Array.from({ length: chunkCount }, (_, i) => {
        return (
          <div
            key={i}
            className={`${prefixCls}__item`}
            onClick={() => {
              onChange && onChange(i + 1, 10)
            }}
          >
            <a className={`${prefixCls}__text`} rel="nofollow">
              {['你好', 'hello world'][i % 2]}
            </a>

          </div>
        )
      })}
    </div>
  )
}

betterDisplayName(Pagination)

export default Pagination
