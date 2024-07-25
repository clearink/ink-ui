import type { WithStyleHelpers } from '../props'

export default function attachCustomHelpers<E extends HTMLElement>(
  el: E | null,
  additional: Record<string, null | string>,
) {
  const dom = el as WithStyleHelpers<E> | null

  if (!dom) return dom

  dom.$set ||= (property: string, value: null | string, priority?: string) => {
    dom.style.setProperty(property, value, priority)

    additional[property] = value
  }

  dom.$remove ||= (property: string) => {
    dom.style.removeProperty(property)

    delete additional[property]
  }

  return dom
}
