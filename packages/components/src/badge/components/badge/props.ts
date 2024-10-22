import type { SizeType } from '@comps/_shared/contexts'
import type { HasChildren, SemanticStyledProps } from '@comps/_shared/types'
import type { CSSProperties, ReactNode } from 'react'

export interface BadgeProps extends HasChildren,
  SemanticStyledProps<'indicator' | 'root'> {
  color?: string
  count?: ReactNode
  dot?: boolean
  hidden?: boolean
  maxCount?: number
  offset?: [number, number]
  size?: 'default' | 'small'
  status?: 'default' | 'error' | 'processing' | 'success' | 'warning'
  style?: CSSProperties
  text?: ReactNode
  title?: ReactNode
}

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                      default props                      |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export const defaultBadgeProps: Partial<BadgeProps> = {
  maxCount: 99,
}

export interface BadgeProps2 extends HasChildren,
  SemanticStyledProps<'indicator' | 'root'> {
  color: string
  count: ReactNode
  hidden?: boolean
  offset?: [number, number]
  size?: 'default' | 'small' | SizeType
  style?: CSSProperties
}

export type BadgeProps3 = {
  h: string
  v: number
} & BadgeProps2
