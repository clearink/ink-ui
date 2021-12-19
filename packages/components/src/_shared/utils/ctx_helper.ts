import { createContext, useContext } from 'react'

export function ctxHelper<R>(init: R) {
  const Context = createContext(init)

  return {
    Consumer: Context.Consumer,
    Provider: Context.Provider,
    useState: () => useContext(Context),
  }
}
