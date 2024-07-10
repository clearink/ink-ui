import { getTargetElement } from '@comps/_shared/utils'
import { ownerDocument } from '@internal/utils'
import { createRoot } from 'react-dom/client'

import type { NotificationConfig } from '../props'

function createHolder(getContainer: NotificationConfig['getContainer']) {
  const doc = ownerDocument()

  const container = getTargetElement(getContainer, doc.body)

  if (!container)
    throw new Error('getContainer is not existed')

  const div = doc.createElement('div')

  const root = createRoot(container.appendChild(div))

  const unmount = () => {
    root.unmount()
    container.removeChild(div)
  }

  const notices: NotificationConfig[] = []

  return { root, unmount, notices }
}

export function buildHolder() {
  const cache = new Map<NotificationConfig['placement'], ReturnType<typeof createHolder>>()

  return function getInstance(config: NotificationConfig) {
    const { placement, getContainer } = config

    if (!cache.has(placement))
      cache.set(placement, createHolder(getContainer))

    const { root, unmount, notices } = cache.get(placement)!

    const destroy = () => {
      unmount()
      cache.delete(placement)
    }

    return { root, destroy, notices }
  }
}
