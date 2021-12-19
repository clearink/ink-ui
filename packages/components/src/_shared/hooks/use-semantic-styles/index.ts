import { isUndefined } from '@internal/utils'
import { useMemo } from 'react'

export function useSemanticStyles<K extends string, V extends object>(
  root: V | undefined,
  semantics: Partial<Record<K, V>> | undefined,
) {
  return useMemo(() => {
    const result = { ...semantics } as Partial<Record<'root' | K, V>>

    if (!isUndefined(root)) result.root = { ...root, ...result.root }

    return result
  }, [root, semantics])
}
