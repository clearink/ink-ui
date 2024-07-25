import { isUndefined } from '@internal/utils'
import { useEffect, useState } from 'react'

import type { ScreenMatch } from './breakpoint'

import { useEvent } from '../use-event'
import observer from './breakpoint-observer'

// 基础响应式断点 hooks
export function useBreakpoint(shouldUpdate?: (query: ScreenMatch<boolean>) => boolean) {
  const [matches, updateMatches] = useState(observer.getCurrentMatches)

  const handler = useEvent((query: ScreenMatch<boolean>) => {
    if (isUndefined(shouldUpdate) || shouldUpdate(query)) updateMatches(query)
  })

  useEffect(() => observer.subscribe(handler), [handler])

  return matches
}
