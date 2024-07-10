import type { HasClosable } from '@comps/_shared/types'
import type { MayBe } from '@internal/types'

import { withDefaults } from '@comps/_shared/utils'
import { isNull, isObject, isUndefined } from '@internal/utils'

export default function formatState(state: MayBe<HasClosable>) {
  const closable = state ? state.closable : undefined

  const closeIcon = state ? state.closeIcon : undefined

  if (isUndefined(closable)) {
    if (isNull(closeIcon)) return false

    if (isUndefined(closeIcon)) return undefined

    return { closeIcon }
  }

  if (closable === false) return false

  const config = { closeIcon }

  return isObject(closable) ? withDefaults(closable, config) : config
}
