import { buildTypes, constants, formatExternals, getPkgJson } from '../../utils'

export default async function buildDts() {
  const pkgJson = await getPkgJson()

  const externals = formatExternals(pkgJson)

  buildTypes({
    alias: constants.iconsAlias,
    externals,
  })
}
