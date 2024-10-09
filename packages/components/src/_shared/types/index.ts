export type ReactRef<T = any> = React.MutableRefObject<T> | React.Ref<T>

// components
export interface StyledProps {
  /**
   * @zh 类名
   */
  className?: string
  /**
   * @zh 样式
   */
  style?: React.CSSProperties
}
export interface SemanticStyledProps<K extends string> extends StyledProps {
  /**
   * @zh 语义化类名
   */
  classNames?: Partial<Record<K, string>>
  /**
   * @zh 语义化样式
   */
  styles?: Partial<Record<K, React.CSSProperties>>
}

export interface HasChildren<S = React.ReactNode> {
  /**
   * @zh 子元素
   */
  children?: S
}

export type PopupPlacement =
  | 'bottom' | 'bottomLeft' | 'bottomRight'
  | 'left' | 'leftBottom' | 'leftTop'
  | 'right' | 'rightBottom' | 'rightTop'
  | 'top' | 'topLeft' | 'topRight'

export type NotificationPlacement =
  | 'bottom' | 'bottomLeft'
  | 'bottomRight' | 'top'
  | 'topLeft' | 'topRight'

/**
 * @description 可关闭功能统一策略
 */
export interface HasClosable {
  /**
   * @zh close 图标
   */
  closeIcon?: React.ReactNode
  /**
   * @zh 是否展示
   */
  closable?: ({ closeIcon?: React.ReactNode } & React.AriaAttributes) | boolean
}

export interface HasIconRenderClosable extends HasClosable {
  closeIconRender?: (icon: React.ReactNode) => React.ReactNode
}

// 状态类型
export type StatusType = 'error' | 'info' | 'success' | 'warning'
