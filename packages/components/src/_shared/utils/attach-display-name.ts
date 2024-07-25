export function attachDisplayName<T>(WrappedComponent: T, explicitName?: string) {
  const Wrapped: any = WrappedComponent

  if (process.env.NODE_ENV !== 'production')
    Wrapped.displayName = explicitName || `${Wrapped.name}`.replace(/^_/g, '')
}
