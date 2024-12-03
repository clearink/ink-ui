import { useDebounceFrame, useWatchValue2 } from '@comps/_shared/hooks'
import isEqual from 'react-fast-compare'

import type { NotificationListProps } from '../props'
import type { NotificationListAction, NotificationListState } from './use-notification-list-store'

// 监听 stack 信息, 保证 ui 的同步
export default function useWatchNotificationStack(
  props: NotificationListProps,
  states: NotificationListState,
  actions: NotificationListAction,
) {
  const listener = useDebounceFrame(actions.handleUpdate)

  const options = { compare: isEqual, listener }

  useWatchValue2([props.stack, states.hovers.size], options)
}
