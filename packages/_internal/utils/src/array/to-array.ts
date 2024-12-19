import { isArray } from '../is/is-array'
import { isNullish } from '../is/is-nullish'

/**
 * @desc 严格条件下，不是数组的都将返回空数组。
 * 非严格模式下 null，undefined 才返回空数组。
 */
export function toArray<T>(candidate?: null | T | T[], strict = false): T[] {
  if (isNullish(candidate)) return []

  if (isArray(candidate)) return candidate

  return strict ? [] : [candidate]
}
