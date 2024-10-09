import type { CSSProperties } from 'react'

import { GroupTransition } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { betterDisplayName, cls, withDefaults } from '@comps/_shared/utils'

import type { NotificationListProps } from './props'

import NotificationNotice from '../notice'
import useNotificationListStore from './hooks/use-notification-list-store'
import useWatchNotificationStack from './hooks/use-watch-notification-stack'

function NotificationList(props: NotificationListProps) {
  const { notices, placement, top, bottom, onClose, onFinished } = props

  const style: CSSProperties = placement.startsWith('bottom') ? { bottom } : { top }

  const prefixCls = usePrefixCls('notification')

  const { states, actions } = useNotificationListStore(props)

  const { stackEnable, hovers, stackConfig: { gap, threshold } } = states

  const isExpanded = stackEnable && (notices.length <= threshold || hovers.size > 0)

  useWatchNotificationStack(props, states, actions)

  return (
    <div
      className={cls(prefixCls, {
        [`${prefixCls}--${placement}`]: placement,
        [`${prefixCls}--stack`]: stackEnable,
        [`${prefixCls}--expanded`]: isExpanded,
      })}
      style={withDefaults(style, { zIndex: 2000 })}
    >
      <GroupTransition
        ref={actions.setComponents}
        appear
        classNames={`${prefixCls}-motion`}
        onEnter={actions.handleEnter}
        onEntering={actions.handleEntering}
        onExit={actions.handleExit}
        onExiting={actions.handleExiting}
        onFinished={onFinished}
      >
        {notices.map(item => (
          <div
            key={item.key}
            className={`${prefixCls}-notice-wrapper`}
            onMouseEnter={() => { actions.addHover(item.key!) }}
            onMouseLeave={() => { actions.removeHover(item.key!) }}
          >
            <NotificationNotice
              {...item}
              key={item.key}
              ref={(el) => { actions.setPanel(item.key!, el) }}
              onClose={() => { item.onClose?.(); onClose(item.key) }}
            />
            {isExpanded && <div className={`${prefixCls}-pointer-holder`} style={{ height: gap }} />}
          </div>
        ))}
      </GroupTransition>
    </div>
  )
}

betterDisplayName(NotificationList, 'Notification.List')

export default NotificationList
