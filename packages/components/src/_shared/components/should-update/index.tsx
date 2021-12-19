import { withDisplayName } from '@comps/_shared/utils'
import { isFunction } from '@internal/utils'
import { memo } from 'react'

import { type ShouldUpdateProps } from './props'

export default withDisplayName(
  memo(
    (props: ShouldUpdateProps) => props.children as React.ReactElement,
    (_, { when }) => !(isFunction(when) ? when() : when),
  ),
  'ShouldUpdate',
)
