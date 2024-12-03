import type { ForwardedRef } from 'react'

import { betterDisplayName, getTargetElement } from '@comps/_shared/utils'
import { isNullish, ownerBody } from '@internal/utils'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'

import type { PortalProps, PortalRef } from './props'

function Portal(props: PortalProps, ref: ForwardedRef<PortalRef>) {
  const { children, getContainer: _container } = props

  const [container, set] = useState(() => getTargetElement(_container, ownerBody()))

  useImperativeHandle<PortalRef, PortalRef>(ref, () => container, [container])

  useEffect(() => { set(getTargetElement(_container, ownerBody())) }, [_container])

  if (isNullish(container)) return null

  if (container === false) return <>{children}</>

  return createPortal(children, container)
}

betterDisplayName(Portal)

export default forwardRef(Portal)
