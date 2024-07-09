import { type MayBe } from '@internal/types'
import { isBrowser, isFunction, isNullish, isObjectLike, isString, ownerDocument } from '@internal/utils'
import { type MutableRefObject } from 'react'

type TargetElement = Document | Element | HTMLElement | Window | false

export type GetTargetElement<T extends TargetElement> =
  | (() => MayBe<T>)
  | MayBe<T>
  | MutableRefObject<MayBe<T>>
  | string

export function getTargetElement<T extends TargetElement>(target: GetTargetElement<T>): MayBe<T>
export function getTargetElement<T extends TargetElement>(
  target: GetTargetElement<T>,
  defaultElement: T,
): MayBe<T>
export function getTargetElement<T extends TargetElement>(...args: [GetTargetElement<T>, T?]) {
  const [target, defaultElement] = args

  if (!isBrowser) return null

  if (isNullish(target)) return defaultElement

  if (isFunction(target)) return target()

  if (isString(target)) return ownerDocument().querySelector(target) as T

  if (isObjectLike(target) && 'current' in target) return target.current

  return target
}
