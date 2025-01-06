import glob from 'fast-glob'
import fse from 'fs-extra'
import tsm from 'ts-morph'

import type { BuiltinTypeDefinitionItem } from '../interface'

import { constants } from './constants'
import { getBuiltinSources } from './get-builtin-sources'
import replaceSpecifier from './replace-specifier'

export interface BuildDtsOptions {
  externals: (RegExp | string)[]
  builtins: BuiltinTypeDefinitionItem[]
}

// 打包类型
export async function buildTypes(options: BuildDtsOptions) {
  const project = new tsm.Project({
    skipAddingFilesFromTsConfig: true,
    tsConfigFilePath: constants.resolveCwd('tsconfig.json'),
    compilerOptions: {
      declaration: true,
      noEmit: false,
      declarationDir: constants.esm,
      emitDeclarationOnly: true,
    },
  })

  await getBuiltinSources(project, options.builtins)

  // 替换 alias
  replaceSpecifier(project, options)

  const diagnostics = project.getPreEmitDiagnostics()

  if (diagnostics.length > 0) {
    throw new Error(project.formatDiagnosticsWithColorAndContext(diagnostics))
  }

  await project.emit({ emitOnlyDtsFiles: true })

  // copy dts files to lib
  const files = await glob.async('**/*.d.ts', { cwd: constants.esm })

  await Promise.all(files.map(file =>
    fse.copy(constants.resolveEsm(file), constants.resolveCjs(file))))
}
