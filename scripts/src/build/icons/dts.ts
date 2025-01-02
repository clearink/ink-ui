import { buildTypes, constants, formatPkgJson } from '../../utils'

export default async function buildDts() {
  const filePath = constants.resolveCwd('./package.json')

  const { externals } = await formatPkgJson(filePath)

  await buildTypes({
    externals,
    builtins: [
      {
        find: '@internal/types',
        replacement: constants.resolveSrc('_internal/types'),
        mapping: constants.resolveTypes('src'),
        ignores: constants.ignoreFiles,
      },
      {
        find: '@internal/utils',
        replacement: constants.resolveSrc('_internal/utils'),
        mapping: constants.resolveUtils('src'),
        ignores: constants.ignoreFiles,
      },
      {
        find: '@icons',
        replacement: constants.resolveSrc('.'),
        mapping: constants.resolveSrc('.'),
        ignores: constants.ignoreFiles,
      },
    ],
  })
}
