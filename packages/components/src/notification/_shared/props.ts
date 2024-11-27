import type { HasClosable } from '@comps/_shared/types'
import type { GetTargetElement } from '@comps/_shared/utils'

import { ownerBody } from '@internal/utils'

import type { NotificationProps } from '../components/notice/props'

// notification.config/ useNotification 函数时的参数
export interface NotificationConfig extends HasClosable,
  Pick<NotificationProps, 'duration' | 'pauseOnHover' | 'placement' | 'showProgress'> {
  /**
   * @zh 消息从顶部弹出时的起始距离
   * @default 24
   */
  top?: number

  /**
   * @zh 消息从底部弹出时的起始距离
   * @default 24
   */
  bottom?: number

  /**
   * @zh 渲染节点的父级位置
   * @default () => document.body
   */
  getContainer?: GetTargetElement<HTMLElement | ShadowRoot>

  /**
   * @zh 堆叠模式，超过阈值时会将所有消息收起
   * @default '{ threshold: 3, offset: 8, gap: 16 }'
   */
  stack?: boolean | Partial<NotificationStackConfig>

  /**
   * @zh 最大显示数, 超过限制时,最早的消息会被自动关闭
   */
  maxCount?: number

}

export interface NotificationMethods {
  error: (props: NotificationProps) => void
  info: (props: NotificationProps) => void
  success: (props: NotificationProps) => void
  warning: (props: NotificationProps) => void
  open: (props: NotificationProps) => void
  close: (key?: NotificationProps['key']) => void
}

export interface NotificationStackConfig {
  threshold: number
  offset: number
  gap: number
}

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                      default props                      |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export const defaultNotificationConfig: Partial<NotificationConfig> = {
  top: 24,
  bottom: 24,
  duration: 4500,
  placement: 'topRight',
  showProgress: false,
  pauseOnHover: true,
  getContainer: ownerBody,
  stack: true,
}
