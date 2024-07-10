import { CSSTransition } from '@comps/_shared/components'
import { useDebounceState, usePrefixCls } from '@comps/_shared/hooks'
import { useEffect } from 'react'

import type { NotificationNoticeProps } from './props'

function NotificationNotice(_props: NotificationNoticeProps) {
  const props = _props

  const { message, description, onExited } = props

  const prefixCls = usePrefixCls('notification')

  const [visible, setVisible] = useDebounceState(4500, true)

  useEffect(() => { setVisible(false) }, [setVisible])

  return (
    <CSSTransition
      appear
      name={`${prefixCls}-motion`}
      when={visible}
      onEnter={(el) => {
        el.style.transform = `translate3d(100%, 100px, 0)`
      }}
      onEntering={(el) => {
        el.style.transform = `translate3d(0, 100px, 0)`
      }}
      onEnterCancel={(el) => {
        el.style.height = `${el.clientHeight}px`
      }}
      onExit={(el) => {
        el.style.height = `${el.clientHeight}px`
      }}
      onExiting={(el) => {
        el.style.height = '0px'
      }}
      onExited={onExited}
    >
      <div className={`${prefixCls}-notice`}>
        <div className={`${prefixCls}-notice__content`}>
          {message}
          {description}
        </div>
      </div>
    </CSSTransition>
  )
}

export default NotificationNotice
