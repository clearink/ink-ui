import globalInstance from './_shared/utils/global-instance'
import useNotification from './hooks/use-notification'

const notification = Object.assign(globalInstance.inject(), {
  useNotification,
})

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { NotificationConfig } from './_shared/props'
export type { NotificationProps } from './components/notice/props'

export { notification }

export default notification
