import type { HasClosable, StyledProps } from '@comps/_shared/types'
import type { AlertProps } from '@comps/alert'
import type { ModalProps } from '@comps/modal'
import type { SpaceProps } from '@comps/space'
import type { TouchEffectState } from '@comps/touch-effect/_shared/contexts'
import type { ReactNode } from 'react'

import type { SizeType } from '../../_shared/contexts'

export interface ConfigProviderProps {
  children?: ReactNode
  prefixCls?: string
  size?: SizeType
  space?: Pick<SpaceProps, 'className' | 'classNames' | 'size' | 'style' | 'styles'>
  touchEffect?: TouchEffectState

  alert?: Pick<AlertProps, keyof HasClosable> & StyledProps

  modal?: Pick<ModalProps, keyof HasClosable> & StyledProps

}
