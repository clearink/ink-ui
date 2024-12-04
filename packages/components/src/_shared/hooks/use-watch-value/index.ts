import { isFunction, shallowEqual } from '@internal/utils'

import { useExactState } from '../use-exact-state'

export interface WatchOptions<S> {
  compare: (current: S, previous: null | S) => boolean
  listener: (current: S, previous: null | S) => boolean | void
  immediate?: boolean
}

function formatOptions<S>(options: WatchOptions<S> | WatchOptions<S>['listener']): WatchOptions<S> {
  return isFunction(options)
    ? { compare: shallowEqual, listener: options }
    : options
}

const initial = Symbol.for('use-watch-value-hook')

function useWatchValue<S>(current: S, args: WatchOptions<S>): boolean
function useWatchValue<S>(current: S, args: WatchOptions<S>['listener']): boolean
function useWatchValue<S>(current: S, args: any): boolean {
  const { compare, listener, immediate } = formatOptions(args)

  const [value, update] = useExactState(() => immediate ? initial : current)

  const isInitial = value === initial

  if (!isInitial && compare(current, value)) {
    return false
  }

  listener(current, isInitial ? null : value)

  update(current)

  return true
}

export { useWatchValue }
