import { mergeRefs, supportRef, withDisplayName } from '@comps/_shared/utils'
import { type ReactRef } from '@internal/types'
import { isFunction } from '@internal/utils'
import { cloneElement, forwardRef } from 'react'

import { type ForwardFunctionalProps } from './props'

function ForwardFunctional<T extends React.ReactElement, R extends ReactRef<any>>(
  props: ForwardFunctionalProps<T, R>,
  ref: R,
) {
  const { children } = props

  if (isFunction(children)) return children(ref)

  return supportRef(children)
    ? cloneElement(children, { ref: mergeRefs(ref, children.ref) })
    : children
}

export default forwardRef(withDisplayName(ForwardFunctional)) as <
  T extends React.ReactElement,
  R extends ReactRef<any> = ReactRef<any>,
>(
  props: ForwardFunctionalProps<T, R> & React.RefAttributes<R>,
) => JSX.Element
