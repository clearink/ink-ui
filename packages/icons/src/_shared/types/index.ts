import type { FC, SVGAttributes } from 'react'

export type ThemeType = 'filled' | 'outlined' | 'twotone'

export interface IconProps extends SVGAttributes<SVGElement> {}

export type IconComp = FC<IconProps>

export interface IconDesc {
  name: string
  theme: ThemeType
}
