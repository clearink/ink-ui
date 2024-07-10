import type { ReactRef } from '@comps/_shared/types'

import { isFunction, isNullish } from '@internal/utils'
import { Component, type ReactElement, type ReactNode, isValidElement } from 'react'
import { isFragment, isMemo } from 'react-is'

export function fillRef<T>(el: T, ref?: ReactRef<T>) {
  if (isFunction(ref)) ref(el)
  else if (!isNullish(ref)) (ref as any).current = el
}

export function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return (el: T | null) => { refs.forEach((ref) => { fillRef(el, ref) }) }
}

export function supportRef(el: ReactNode): el is { ref: ReactRef<any> } & ReactElement {
  if (isFragment(el) || !isValidElement(el)) return false

  const type = isMemo(el) ? el.type.type : el.type

  if (isFunction(type) && !(type instanceof Component)) return false

  return true
}
