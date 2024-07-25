import useMessage from './hooks/use-message'
import instance from './utils/global-instance'

const message = Object.assign(instance.inject(), {
  useMessage,
})

export default message
