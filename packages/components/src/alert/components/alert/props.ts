import type { HasClosable, SemanticStyledProps, StatusType } from '@comps/_shared/types'
import type { HTMLAttributes, ReactNode } from 'react'

export interface AlertProps extends HasClosable, HTMLAttributes<HTMLDivElement>,
  SemanticStyledProps< 'action' | 'closeBtn' | 'content' | 'description' | 'icon' | 'message' | 'root' | 'wrap'> {
  action?: ReactNode
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
  afterClose?: (el: HTMLDivElement) => void
  /**
   * @description 是否用作顶部公告
   */
  banner?: boolean
  /**
   * @description 警告提示的辅助性文字介绍
   */
  description?: ReactNode
  /**
   * @description 自定义图标，showIcon 为 true 时有效
   */
  icon?: ReactNode
  /**
   * @description 警告提示内容
   */
  message?: ReactNode
  /**
   * @description 是否显示辅助图标(banner 模式下强制为true)
   */
  showIcon?: boolean
  /**
   * @description 指定警告提示的样式(banner 模式下默认值为 warning)
   * @enum success|info|warning|error
   * @default 'info'
   */
  type?: StatusType

}

export interface AlertRef {
  nativeElement?: HTMLDivElement | null
}
