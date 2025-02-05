const defaultProviderConfig = {
  prefixCls: 'ink',
  iconPrefixCls: 'ink-icon',
}

class GlobalProviderConfig {
  private config: Record<string, any> = { ...defaultProviderConfig }

  get = () => {
    return { ...this.config }
  }

  set = (config: Record<string, any>) => {
    this.config = config
  }
}

export default new GlobalProviderConfig()
