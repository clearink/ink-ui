import { CSSTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { withDefaults, withDisplayName } from '@comps/_shared/utils'

import useFormatClass from './hooks/use_format_class'
import usePageChunk from './hooks/use_page_chunk'
import useSharedLayout from './hooks/use_shared_layout'
import { type PaginationProps } from './props'

const defaultProps: Partial<PaginationProps> = {
  defaultCurrent: 1,
  defaultPageSize: 10,
  hideOnSinglePage: false,
  showHtmlTitle: true,
  showJumper: false,
  simple: false,
  total: 0,
  totalBoundaryShowSizeChanger: 50,
}

function Pagination(_props: PaginationProps) {
  const props = withDefaults(_props, defaultProps)

  const { onChange } = props

  const prefixCls = usePrefixCls('pagination')

  const classes = useFormatClass(prefixCls, props)

  const [current, chunkCount] = usePageChunk(props)

  const shared = useSharedLayout<HTMLDivElement>()

  // 渲染 prev list next size jumper
  return (
    <div className={classes}>
      {Array.from({ length: chunkCount }, (_, i) => {
        return (
          <div
            className={`${prefixCls}__item`}
            key={i}
            onClick={() => {
              onChange && onChange(i + 1, 10)
            }}
          >
            <a className={`${prefixCls}__text`} rel="nofollow">
              {['你好', 'hello world'][i % 2]}
            </a>
            {current === i + 1 && (
              <CSSTransition
                appear
                onEnter={(el, appearing) => {
                  if (!appearing || !shared.rect) return

                  const rect = el.getBoundingClientRect()

                  const sx = rect.width ? shared.rect.width / rect.width : 1
                  const sy = rect.height ? shared.rect.height / rect.height : 1
                  const ox = shared.rect.x - rect.x + (shared.rect.width - rect.width) / 2
                  const oy = shared.rect.y - rect.y + (shared.rect.height - rect.height) / 2

                  el.style.transform = `translate3d(${ox}px, ${oy}px, 0) scale(${sx}, ${sy})`
                }}
                onEntered={(el) => {
                  el.style.transform = ''
                  el.style.transition = ''
                }}
                onEntering={(el) => {
                  el.style.transform = 'translate3d(0, 0, 0) scale(1, 1)'
                  el.style.transition = 'transform 3s cubic-bezier(0.645, 0.045, 0.355, 1)'
                }}
                unmountOnExit
                when
              >
                <div className={`${prefixCls}__active`} ref={shared.refCallback} />
              </CSSTransition>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default withDisplayName(Pagination)
