import { type HasChildren } from '@internal/types'

export interface ShouldUpdateProps extends HasChildren {
  when: (() => boolean) | boolean
}
