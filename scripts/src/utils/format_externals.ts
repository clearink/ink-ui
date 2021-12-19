export function formatExternals(pkgJson: Record<string, string>) {
  const { dependencies = {}, peerDependencies = {} } = pkgJson

  return Object.keys(dependencies).concat(Object.keys(peerDependencies))
    .map(pkg => new RegExp(`^${pkg}`)).concat(/node_modules/)
}
