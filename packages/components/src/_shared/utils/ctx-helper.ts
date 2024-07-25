import { createContext, useContext } from 'react'

import { attachDisplayName } from './attach-display-name'

export function ctxHelper<R>(init: R, ctxName?: string) {
  const Context = createContext(init)

  attachDisplayName(Context, ctxName)

  return {
    Consumer: Context.Consumer,
    Provider: Context.Provider,
    useState: () => useContext(Context),
  }
}
