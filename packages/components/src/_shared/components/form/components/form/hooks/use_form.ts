import { useConstant, useForceUpdate, useMounted } from '@comps/_shared/hooks'

import FormGroupControl from '../control'
import { type ExternalFormInstance } from '../control/props'

export default function useForm<S = any>(form?: ExternalFormInstance<S>) {
  const mounted = useMounted()

  const update = useForceUpdate()

  return useConstant<ExternalFormInstance<S>>(() => {
    const callback = () => mounted() && update()

    return form || new FormGroupControl(callback).injectForm()
  })
}
