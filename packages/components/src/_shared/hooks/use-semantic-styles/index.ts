import type { SemanticStyledProps, StyledProps } from '@comps/_shared/types'
import type { CSSProperties } from 'react'

import { useMemo } from 'react'

export function useSemanticStyles<K extends string>(
  props: SemanticStyledProps<K>,
  context?: StyledProps,
) {
  const { style, styles } = props

  const { style: ctx } = context || {}

  return useMemo(() => {
    const result = { ...styles } as Partial<Record<'root' | K, CSSProperties>>

    if (style || ctx) result.root = { ...ctx, ...style, ...result.root }

    return result
  }, [ctx, style, styles])
}
