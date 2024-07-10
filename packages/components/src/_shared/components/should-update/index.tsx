import { attachDisplayName } from '@comps/_shared/utils'
import { isFunction } from '@internal/utils'
import { memo } from 'react'

import type { ShouldUpdateProps } from './props'

function _ShouldUpdate(props: ShouldUpdateProps) {
  return props.children as React.ReactElement
}

attachDisplayName(_ShouldUpdate)

const ShouldUpdate = memo(_ShouldUpdate, (_, { when }) => !(isFunction(when) ? when() : when))

export default ShouldUpdate
