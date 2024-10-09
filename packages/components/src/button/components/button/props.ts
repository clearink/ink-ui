import type { HasChildren, SemanticStyledProps } from '@comps/_shared/types'
import type { SizeType } from '@comps/config-provider/_shared/contexts'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends
  HasChildren,
  SemanticStyledProps<'icon' | 'root' | 'text'>,
  ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @zh 块级格式
   * @en 块级格式 en
   */
  block?: boolean

  /**
   * @zh 禁用
   * @en 禁用 en
   */
  disabled?: boolean
  /**
   * @zh 幽灵按钮
   * @en 幽灵按钮 en
   */
  ghost?: boolean

  /**
   * @zh 前缀图标
   * @en 前缀图标 en
   */
  icon?: ReactNode

  /**
   * @zh 加载中
   * @en 加载中 en
   */
  loading?: { delay: number } | boolean

  /**
   * @zh 形状
   * @en 形状 en
   * @enum
   * @default `default`
   */
  shape?: 'circle' | 'default' | 'round'

  /**
   * @zh 按钮大小
   * @default `middle`
   */
  size?: SizeType

  /**
   * @zh  按钮主题
   * @enum
   * @default primary
   */
  theme?: 'danger' | 'info' | 'primary' | 'success' | 'warning'

  /**
   * @zh 变体(在不影响布局属性的情况下所派生出的类型)
   * @en 变体(在不影响布局属性的情况下所派生出的类型) en
   * @default `outlined`
   */
  variant?: 'dashed' | 'filled' | 'link' | 'outlined' | 'text'
}

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                      default props                      |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export const defaultButtonProps: Partial<ButtonProps> = {
  theme: 'primary',
  type: 'button',
  variant: 'outlined',
}
