import type { ReactRef } from '@comps/_shared/types'

export interface ForwardFunctionalProps<T extends React.ReactElement, R extends ReactRef<any>> {
  children: ((ref: R) => T) | T
}
