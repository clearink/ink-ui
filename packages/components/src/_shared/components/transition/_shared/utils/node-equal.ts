import { type ReactElement, type ReactNode, isValidElement } from 'react'

export function isNodeEqual(current: ReactNode, next: ReactNode) {
  if (current === next) return true

  if (!isValidElement(current) || !isValidElement(next)) return false

  return current.key && current.key === next.key
}

export function isNodesEqual(prev: ReactElement[], next: ReactElement[]) {
  if (prev.length !== next.length) return false

  return prev.every((el, i) => isNodeEqual(el, next[i]))
}
