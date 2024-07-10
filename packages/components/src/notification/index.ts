import useNotification from './hooks/use_notification'
import notificationImpl from './utils/builder'

// const globalNotification = notificationBuilder()

const notification = {
  success: notificationImpl(),
  info: notificationImpl,
  error: notificationImpl(),
  warning: notificationImpl(),
  useNotification,
}

export default notification
