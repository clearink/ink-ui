import fse from 'fs-extra'

export async function formatPkgJson(filePath: string) {
  return fse.readJson(filePath).then((json) => {
    const { dependencies = {}, peerDependencies = {} } = json

    return {
      pkgJson: json as Record<string, any>,
      externals: Object.keys(dependencies)
        .concat(Object.keys(peerDependencies))
        .map(pkg => new RegExp(`^${pkg}`))
        .concat(/node_modules/) as (RegExp | string)[],
    }
  })
}
