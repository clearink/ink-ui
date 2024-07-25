import type { TouchEffectState } from '@comps/_shared/contexts'
import type { HasClosable, StyledProps } from '@comps/_shared/types'
import type { ReactNode } from 'react'

import type { AlertProps, ModalProps } from '..'
import type { SpaceProps } from '../space/props'
import type { SizeType } from './contexts/size'

export interface ConfigProviderProps {
  children?: ReactNode
  prefixCls?: string
  size?: SizeType
  space?: Pick<SpaceProps, 'className' | 'classNames' | 'size' | 'style' | 'styles'>
  touchEffect?: TouchEffectState

  alert?: Pick<AlertProps, keyof HasClosable> & StyledProps

  modal?: Pick<ModalProps, keyof HasClosable> & StyledProps

}
