import { CSSTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'
import { useState } from 'react'

import type { NotificationPanelProps } from './props'

function NotificationPanel(_props: NotificationPanelProps) {
  const prefixCls = usePrefixCls('notification')

  const [open, setOpen] = useState(true)

  return (
    <CSSTransition
      unmountOnExit
      name={`${prefixCls}-motion`}
      when={open}
      onExit={(el) => { el.style.height = `${el.offsetHeight}px` }}
      onExiting={(el) => { el.style.height = '0' }}
    >
      <div className={`${prefixCls}-panel`}>
        panel

        <button
          type="button"
          onClick={() => {
            setOpen(false)
          }}
        >
          close
        </button>
      </div>
    </CSSTransition>
  )
}

attachDisplayName(NotificationPanel)

export default NotificationPanel
