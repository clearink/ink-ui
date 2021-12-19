import { type Breakpoint } from '@comps/_shared/hooks/use-breakpoint/breakpoint'
import { type LiteralUnion } from '@internal/types'
import { type HTMLAttributes } from 'react'

export type FlexType = LiteralUnion<'auto' | 'none', string> | number
export type ColSpanType = number
export interface ColSize {
  flex?: FlexType
  offset?: ColSpanType
  order?: ColSpanType
  pull?: ColSpanType
  push?: ColSpanType
  span?: ColSpanType
}
export type ResponsiveColSize = Record<Breakpoint, ColSize | ColSpanType>

export type ColProps = ColSize & HTMLAttributes<HTMLDivElement> & Partial<ResponsiveColSize>
