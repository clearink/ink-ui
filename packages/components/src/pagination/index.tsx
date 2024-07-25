import { CssTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { attachDisplayName, withDefaults } from '@comps/_shared/utils'

import useFormatClass from './hooks/use-format-class'
import usePageChunk from './hooks/use-page-chunk'
import { type PaginationProps, defaultPaginationProps } from './props'

function Pagination(_props: PaginationProps) {
  const props = withDefaults(_props, defaultPaginationProps)

  const { onChange } = props

  const prefixCls = usePrefixCls('pagination')

  const classes = useFormatClass(prefixCls, props)

  const [current, chunkCount] = usePageChunk(props)

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

attachDisplayName(Pagination)

export default Pagination
