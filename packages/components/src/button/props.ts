import type { HasChildren, SemanticStyledProps } from '@comps/_shared/types'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { SizeType } from '../config-provider/_shared/props'

export interface ButtonProps extends
  HasChildren,
  SemanticStyledProps<'icon' | 'root' | 'text'>,
  ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @zh-CN 块级格式
   * @en-US 块级格式 en-US
   */
  block?: boolean

  /**
   * @zh-CN 禁用
   * @en-US 禁用 en-US
   */
  disabled?: boolean
  /**
   * @zh-CN 幽灵按钮
   * @en-US 幽灵按钮 en-US
   */
  ghost?: boolean

  /**
   * @zh-CN 前缀图标
   * @en-US 前缀图标 en-us
   */
  icon?: ReactNode

  /**
   * @zh 加载中
   */
  loading?: { delay: number } | boolean

  /**
   * @zh-CN 形状
   * @en-US 形状 en-US
   * @enums
   * @default 'default'
   */
  shape?: 'circle' | 'default' | 'round'

  /**
   * @zh 按钮大小
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
   * @enum
   * @default default
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
