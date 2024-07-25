import useNotification from './hooks/use-notification'
import globalInstance from './utils/global-instance'

const notification = Object.assign(globalInstance.inject(), {
  useNotification,
})

export default notification
