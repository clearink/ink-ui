export function withDisplayName<T>(WrappedComponent: T, explicitName?: string) {
  if (process.env.NODE_ENV !== 'production') {
    (WrappedComponent as any).displayName = explicitName || (WrappedComponent as any).name
  }

  return WrappedComponent
}
