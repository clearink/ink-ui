import { constants, formatExternals, getPkgJson } from '../../utils'
import { buildSource } from '../../utils/build-source'

export default async function buildCode() {
  const pkgJson = await getPkgJson()

  const externals = formatExternals(pkgJson)

  await buildSource({
    alias: constants.validatorAlias,
    externals,
    bundleName: pkgJson.name,
    replaces: constants.replaces,
  })
}
