import { camelCase } from '@internal/utils'

import type { WithStyleHelpers } from '../props'

export default function attachHelpers<E extends HTMLElement>(
  el: E | null,
  record: Record<string, null | string>,
) {
  const dom = el as null | WithStyleHelpers<E>

  if (!dom) return dom

  dom.$set ||= (property: string, value: null | string, priority?: string) => {
    dom.style.setProperty(property, value, priority)

    // 转换成驼峰
    record[camelCase(property)] = value
  }

  dom.$remove ||= (property: string) => {
    dom.style.removeProperty(property)

    delete record[camelCase(property)]
  }

  return dom
}
