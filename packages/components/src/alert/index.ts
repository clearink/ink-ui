import _Alert from './components/alert'
import ErrorBoundary from './components/error-boundary'

const Alert = Object.assign(_Alert, {
  ErrorBoundary,
})

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { AlertProps } from './components/alert/props'
export type { ErrorBoundaryProps } from './components/error-boundary/props'

export { Alert }
export default Alert
