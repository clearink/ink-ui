import { constants, formatPkgJson } from '../../utils'
import { buildSource } from '../../utils/build-source'

export default async function buildCode() {
  const filePath = constants.resolveCwd('./package.json')

  const { pkgJson, externals } = await formatPkgJson(filePath)

  await buildSource({
    externals,
    bundleName: pkgJson.name,
    replaces: constants.replaces,
    builtins: [
      {
        find: '@internal/types',
        replacement: constants.resolveTypes('src'),
        mapping: constants.resolveSrc('_internal/types'),
        ignores: constants.ignoreFiles,
      },
      {
        find: '@internal/utils',
        replacement: constants.resolveUtils('src'),
        mapping: constants.resolveSrc('_internal/utils'),
        ignores: constants.ignoreFiles,
      },
      {
        find: '@emator',
        replacement: constants.resolveSrc('.'),
        mapping: constants.resolveSrc('.'),
        ignores: constants.ignoreFiles,
      },
    ],
  })
}
