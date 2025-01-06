import { useExactState, useWatchValue } from '@comps/_shared/hooks'

import type { ModalProps } from '../props'

export default function useWrapperVisible(isOpen: ModalProps['isOpen']) {
  const [visible, setVisible] = useExactState(isOpen)

  const returnEarly = useWatchValue(isOpen, () => { isOpen && setVisible(true) })

  return [returnEarly, visible, setVisible] as const
}
