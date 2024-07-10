import type { HasClosable, HasIconRenderClosable } from '@comps/_shared/types'
import type { ReactNode } from 'react'

import { omit } from '@internal/utils'
import { cloneElement, isValidElement } from 'react'

export default function formatIcon(
  closableConfig: HasClosable | HasIconRenderClosable,
  defaultConfig: HasIconRenderClosable,
) {
  const { closeIcon } = closableConfig

  const { closeIconRender } = defaultConfig

  let mergedCloseIcon: ReactNode = closeIcon

  const ariaAttrs = omit(closableConfig, ['closable', 'closeIcon', 'closeIconRender'] as any[])

  if (closeIconRender) mergedCloseIcon = closeIconRender(mergedCloseIcon)

  return isValidElement(mergedCloseIcon)
    ? cloneElement(mergedCloseIcon, ariaAttrs)
    : <span {...ariaAttrs}>{mergedCloseIcon}</span>
}
