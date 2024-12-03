import { isFunction } from '@internal/utils'

import { useConstant } from '../use-constant'

export function useAccessor<T>(init: (() => T) | T) {
  return useConstant(() => {
    const state = { value: isFunction(init) ? init() : init }

    return {
      get: () => {
        return state.value
      },
      set: (value: T) => {
        state.value = value
      },
    }
  })
}
