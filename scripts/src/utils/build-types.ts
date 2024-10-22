import glob from 'fast-glob'
import fse from 'fs-extra'
import { Project } from 'ts-morph'

import type { ResolveAliasOptions } from './resolve-alias'

import { constants } from './constants'
import { resolveAlias } from './resolve-alias'

export interface BuildDtsOptions {
  alias: { find: RegExp | string, replacement: string }[]
  externals: (RegExp | string)[]
}

// 打包类型
export async function buildTypes(options: Pick<ResolveAliasOptions, 'alias' | 'externals'>) {
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      declarationDir: constants.esm,
      emitDeclarationOnly: true,
    },
    skipAddingFilesFromTsConfig: true,
  })

  const globOptions = { cwd: constants.src, ignore: constants.ignoreFiles }

  glob.sync('**/*.ts{,x}', globOptions).map((file) => {
    const filePath = constants.resolveSrc(file)
    return [filePath, project.addSourceFileAtPath(filePath)] as const
  }).forEach(([filePath, sourceFile]) => {
    sourceFile
      .getExportDeclarations()
      .concat(sourceFile.getImportDeclarations() as any[])
      .forEach((node) => {
        const specifier = node.getModuleSpecifierValue()

        if (!specifier) return

        const newSpecifier = resolveAlias({ filePath, specifier, ...options })

        if (newSpecifier) node.setModuleSpecifier(newSpecifier)
      })
  })

  await project.emit({ emitOnlyDtsFiles: true })

  // copy dts files to lib
  await Promise.all(glob.sync('**/*.d.ts', { cwd: constants.esm })
    .map(file => fse.copy(constants.resolveEsm(file), constants.resolveCjs(file))))
}
