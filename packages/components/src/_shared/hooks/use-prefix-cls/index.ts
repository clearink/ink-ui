import { ConfigContext } from '@comps/_shared/contexts'

export function usePrefixCls(name?: string) {
  const { prefixCls = 'ink' } = ConfigContext.useState()
  return name ? `${prefixCls}-${name}` : prefixCls
}
