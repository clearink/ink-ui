import type { ReactRef } from '@comps/_shared/types'

import { attachDisplayName, mergeRefs, supportRef } from '@comps/_shared/utils'
import { isFunction } from '@internal/utils'
import { cloneElement, forwardRef } from 'react'

import type { ForwardFunctionalProps } from './props'

function _ForwardFunctional<T extends React.ReactElement, R extends ReactRef<any>>(
  props: ForwardFunctionalProps<T, R>,
  ref: R,
) {
  const { children } = props

  if (isFunction(children)) return children(ref)

  return supportRef(children)
    ? cloneElement(children, { ref: mergeRefs(ref, children.ref) })
    : children
}

attachDisplayName(_ForwardFunctional)

const ForwardFunctional = forwardRef(_ForwardFunctional) as
<T extends React.ReactElement, R extends ReactRef<any> = ReactRef<any>>(
  props: ForwardFunctionalProps<T, R> & React.RefAttributes<R>,
) => JSX.Element

export default ForwardFunctional
