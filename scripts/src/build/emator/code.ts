import { constants, formatPkgJson } from '../../utils'
import { buildSource } from '../../utils/build-source'

export default async function buildCode() {
  const filePath = constants.resolveCwd('./package.json')

  const { pkgJson, externals } = await formatPkgJson(filePath)

  await buildSource({
    alias: constants.ematorAlias,
    externals,
    bundleName: pkgJson.name,
    replaces: constants.replaces,
  })
}
