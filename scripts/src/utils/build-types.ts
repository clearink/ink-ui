import glob from 'fast-glob'
import fse from 'fs-extra'
import tsm from 'ts-morph'

import type { ResolveAliasOptions } from './resolve-alias'

import { constants } from './constants'
import replaceSpecifier from './replace-specifier'

export interface BuildDtsOptions {
  alias: { find: RegExp | string, replacement: string }[]
  externals: (RegExp | string)[]
}

// 打包类型
export async function buildTypes(options: Pick<ResolveAliasOptions, 'alias' | 'externals'>) {
  const project = new tsm.Project({
    skipAddingFilesFromTsConfig: true,
    compilerOptions: {
      allowJs: true,
      declaration: true,
      declarationDir: constants.esm,
      emitDeclarationOnly: true,
    },
  })

  const globOptions = { cwd: constants.src, ignore: constants.ignoreFiles }

  const files = await glob.async('**/*.ts{,x}', globOptions)

  const sources = files.map(file => project.addSourceFileAtPath(constants.resolveSrc(file)))

  // 替换 alias
  replaceSpecifier(sources, options.externals, options.alias)

  await project.emit({ emitOnlyDtsFiles: true })

  // copy dts files to lib
  await Promise.all(glob.sync('**/*.d.ts', { cwd: constants.esm })
    .map(file => fse.copy(constants.resolveEsm(file), constants.resolveCjs(file))))
}
