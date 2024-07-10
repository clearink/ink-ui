import type { AnyObj, MayBe } from '@internal/types'

import { isFunction } from '@internal/utils'
import { type ReactNode, cloneElement, isValidElement } from 'react'

export interface WithFallbackCloneOptions {
  fallback: ReactNode
  props?: ((props: AnyObj) => MayBe<AnyObj>) | AnyObj
}

export function withFallbackCloneElement(
  node: ReactNode,
  options: WithFallbackCloneOptions,
) {
  const { fallback, props } = options

  if (!isValidElement(node)) return fallback

  return cloneElement(node, isFunction(props) ? props(node.props || {}) : props)
}
