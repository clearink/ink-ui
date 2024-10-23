import type { HasClosable, SemanticStyledProps, StatusType } from '@comps/_shared/types'
import type { VoidFn } from '@internal/types'
import type { HTMLAttributes, ReactNode } from 'react'

export interface AlertProps extends HasClosable, HTMLAttributes<HTMLDivElement>,
  SemanticStyledProps<'action' | 'closeBtn' | 'content' | 'description' | 'icon' | 'message' | 'root'> {
  /**
   * @zh 操作节点
   */
  action?: ReactNode
  /**
   * @zh 点击关闭时触发
   */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * @zh 彻底关闭后触发
   */
  onAfterClose?: VoidFn
  /**
   * @zh 是否用作顶部公告
   */
  banner?: boolean
  /**
   * @zh 警告提示的辅助性文字介绍
   */
  description?: ReactNode
  /**
   * @zh 自定义图标，showIcon 为 true 时有效
   */
  icon?: ReactNode
  /**
   * @zh 警告提示内容
   */
  message?: ReactNode
  /**
   * @zh 是否显示辅助图标(banner 模式下强制为true)
   */
  showIcon?: boolean
  /**
   * @zh 指定警告提示的样式(banner 模式下默认值为 warning)
   * @default info
   */
  type?: StatusType

}

export interface AlertRef {
  nativeElement?: HTMLDivElement | null
}
