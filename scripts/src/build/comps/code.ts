import { constants, formatPkgJson } from '../../utils'
import { buildSource } from '../../utils/build-source'

export default async function buildCode() {
  const filePath = constants.resolveCwd('./package.json')

  const { pkgJson, externals } = await formatPkgJson(filePath)

  externals.push(/\.(css|scss|sass)$/)

  await buildSource({
    alias: constants.compsAlias,
    externals,
    bundleName: pkgJson.name,
    replaces: constants.replaces,
  })
}
