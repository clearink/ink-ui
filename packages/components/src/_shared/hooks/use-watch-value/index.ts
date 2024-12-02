import { isFunction, shallowEqual } from '@internal/utils'
import { useMemo, useRef } from 'react'

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

function useWatchValue2<S>(current: S, args: WatchOptions<S>): boolean
function useWatchValue2<S>(current: S, args: WatchOptions<S>['listener']): boolean
function useWatchValue2<S>(current: S, args: any): boolean {
  const { compare, listener, immediate } = formatOptions(args)

  const [value, update] = useExactState(() => immediate ? initial : current)

  // 兼容 react devtool
  return useMemo(() => {
    const isInitial = value === initial

    if (!isInitial && compare(current, value)) {
      return false
    }

    listener(current, isInitial ? null : value)

    update(current)

    return true
  }, [compare, current, listener, value, update])
}

export { useWatchValue2 }

function useWatchValue<S>(current: S, args: WatchOptions<S>): boolean
function useWatchValue<S>(current: S, args: WatchOptions<S>['listener']): boolean
function useWatchValue<S>(current: S, args: any): boolean {
  const { compare, listener, immediate } = formatOptions(args)

  const cache = useRef(immediate ? initial : current)

  // 兼容 react devtool
  return useMemo(() => {
    const isInitial = cache.current === initial

    if (!isInitial && compare(current, cache.current)) return false

    const shouldUpdate = listener(current, isInitial ? null : cache.current)

    cache.current = current

    return !!shouldUpdate
  }, [compare, current, listener])
}

export { useWatchValue }
