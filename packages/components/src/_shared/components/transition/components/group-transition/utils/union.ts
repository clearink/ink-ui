import type { ReactElement } from 'react'

import { isNullish } from '@internal/utils'

import type { TransitionState } from '../hooks/use_transition_store'

// 并集且有序
export default function union<E extends HTMLElement>(
  map: TransitionState<E>['elements'],
  enters: Set<ReactElement['key']>,
  children: ReactElement[],
) {
  let lastIndex = -1

  const sequences = children
    .map(el => [el.key, enters.has(el.key) ? el : map.get(el.key)?.node])
    .filter(item => !isNullish(item[1])) as [ReactElement['key'], ReactElement][]

  return Array.from(map).reduce((result, [key, { node }]) => {
    const index = result.findIndex(item => item[0] === key)

    if (index < 0) result.splice(++lastIndex, 0, [key, node])
    else lastIndex = Math.max(index, lastIndex)

    return result
  }, sequences)
}
