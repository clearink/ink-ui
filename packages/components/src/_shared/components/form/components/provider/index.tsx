import { batch, noop } from '@internal/utils'
import { useMemo, useRef } from 'react'

// import FormProviderControl from './control'
import { InternalFormContext, type InternalFormContextState } from '../../_shared/context'
import { type Forms, type InternalFormProviderProps } from './props'

export default function FormProvider(props: InternalFormProviderProps) {
  // TODO: chore
  // const control = useConstant(() => new FormProviderControl())

  const forms = useRef<Forms>({})

  const parentContext = InternalFormContext.useState()

  const formContext = useMemo<InternalFormContextState>(() => {
    return {
      register: batch(parentContext.register, (form, name) => {
        if (!name) return noop

        forms.current[name] = form

        return () => { delete forms.current[name] }
      }),
      triggerFormChange: parentContext.triggerFormChange,
      triggerFormFinish: parentContext.triggerFormFinish,
    }
  }, [parentContext])

  return (
    <InternalFormContext.Provider value={formContext}>
      {props.children}
    </InternalFormContext.Provider>
  )
}
