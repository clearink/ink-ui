import { buildTypes, constants, formatPkgJson } from '../../utils'

export default async function buildDts() {
  const filePath = constants.resolveCwd('./package.json')

  const { externals } = await formatPkgJson(filePath)

  await buildTypes({ alias: constants.compsAlias, externals })
}
