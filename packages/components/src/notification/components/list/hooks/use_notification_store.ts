import type { NotificationConfig } from '@comps/notification/props'
import type { VoidFn } from '@internal/types'

import { useConstant, useForceUpdate, useWatchValue } from '@comps/_shared/hooks'
import { useMemo } from 'react'

import type { NotificationListProps } from '../props'

export class NotificationState {
  notices: NotificationConfig[]

  constructor(notice: NotificationListProps['notice']) {
    this.notices = [notice]
  }
}

export class NotificationAction {
  constructor(public forceUpdate: VoidFn, private states: NotificationState) {

  }

  appendNotice = (notice: NotificationConfig) => {
    this.states.notices.push(notice)

    this.forceUpdate()
  }

  updateNotices = (notices: NotificationState['notices']) => {
    this.states.notices = notices

    this.forceUpdate()
  }
}

export default function useNotificationStore(props: NotificationListProps) {
  const { notice } = props

  const update = useForceUpdate()

  const states = useConstant(() => new NotificationState(notice))

  const actions = useMemo(() => new NotificationAction(update, states), [update, states])

  let returnEarly = false

  useWatchValue(notice, () => {
    returnEarly = true

    actions.appendNotice(notice)
  })

  return { returnEarly, states, actions }
}
