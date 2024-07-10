import { constants, formatExternals, getPkgJson } from '../../utils'
import { buildSource } from '../../utils/build_source'

export default async function buildCode() {
  const pkgJson = await getPkgJson()

  const externals = formatExternals(pkgJson)

  externals.push(/\.(css|scss|sass)$/)

  await buildSource({
    alias: constants.compsAlias,
    externals,
    bundleName: pkgJson.name,
    replaces: constants.replaces,
  })
}
