import { mergeRefs } from '@comps/_shared/utils'
import { type MayBe, type ReactRef } from '@internal/types'
import { isNullish } from '@internal/utils'
import { useMemo } from 'react'

export function useComposeRefs<T>(...refs: MayBe<ReactRef<T>>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => (refs.every(isNullish) ? null : mergeRefs(...refs)), refs)
}
