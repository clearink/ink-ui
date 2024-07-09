import { type DependencyList, useMemo } from 'react'
import isEqual from 'react-fast-compare'

import { useConstant } from '../use-constant'

export function useDeepMemo<T>(factory: () => T, deps?: DependencyList): T {
  const state = useConstant(() => ({ deps, value: factory() }))

  useMemo(() => {
    if (isEqual(state.deps, deps)) return

    state.deps = deps

    state.value = factory()
  }, [deps, factory, state])

  return state.value
}
