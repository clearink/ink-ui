import type { AnyFn } from '@internal/types'

import { makeTimeout } from '@internal/utils'
import { useEffect, useMemo } from 'react'

import { useEvent } from '../use-event'
import { useExactState } from '../use-exact-state'
import { useMounted } from '../use-mounted'

// 防抖 函数
export function debounce<F extends AnyFn>(fn: F, delay: number) {
  let cleanup = () => {}

  function inner(this: unknown, ...args: any[]) {
    cleanup()

    cleanup = makeTimeout(delay, () => { fn.apply(this, args) })
  }

  return [inner as F, () => { cleanup() }] as const
}

// 防抖 hook
export function useDebounceTimeout<F extends AnyFn>(delay: number, fn: F) {
  const callback = useEvent(fn)

  const [debounced, clear] = useMemo(() => debounce(callback, delay), [callback, delay])

  // 自动清除定时器
  useEffect(() => clear, [clear])

  return debounced
}

// 防抖 value
export function useDebounceValue<Value>(delay: number, value: Value) {
  const [state, setState] = useExactState(value)

  const mounted = useMounted()

  const callback = useDebounceTimeout(delay, () => { mounted() && setState(value) })

  useEffect(callback, [callback, value])

  return state
}

export function useDebounceState<S>(delay: number, initialState: (() => S) | S) {
  const [state, set] = useExactState(initialState)

  const setState = useDebounceTimeout(delay, set)

  return [state, setState] as const
}
