import { isFunction, shallowEqual } from '@internal/utils'
import { useMemo, useRef } from 'react'

export interface WatchOptions<S> {
  compare: (current: S, previous: S | null) => boolean
  listener: (current: S, previous: S | null) => boolean | void
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
