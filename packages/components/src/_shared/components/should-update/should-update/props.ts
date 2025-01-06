import type { HasChildren } from '@comps/_shared/types'

export interface ShouldUpdateProps extends HasChildren {
  when: (() => boolean) | boolean
}
