import instance from './_shared/utils/global-instance'
import useMessage from './hooks/use-message'

const message = Object.assign(instance.inject(), {
  useMessage,
})

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export { message }
export default message
