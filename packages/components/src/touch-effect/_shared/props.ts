export interface TouchEffectInfo {
  /**
   * @zh 组件名称
   */
  component: string
  /**
   * @zh 容器元素
   */
  container: HTMLElement
  /**
   * @zh 事件
   */
  event: MouseEvent
  prefixCls: string
  target: HTMLElement | null
}
