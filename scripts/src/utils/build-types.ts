import glob from 'fast-glob'
import fse from 'fs-extra'
import path from 'node:path'
import slash from 'slash'
import { Project } from 'ts-morph'

import { constants } from './constants'
import { moduleMatches } from './module-matches'

export interface BuildDtsOptions {
  alias: { find: RegExp | string, replacement: string }[]
  externals: (RegExp | string)[]
}

// 打包类型
export async function buildTypes(options: BuildDtsOptions) {
  const { externals, alias } = options

  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      declarationDir: constants.esm,
      emitDeclarationOnly: true,
    },
    skipAddingFilesFromTsConfig: true,
  })

  const resolveAlias = (filepath: string, specifier: string) => {
    const isExternal = externals.find(e => moduleMatches(e, specifier))

    if (isExternal) return

    const matched = alias.find(e => moduleMatches(e.find, specifier))

    if (!matched) return

    const { find, replacement } = matched

    let text = slash(path.relative(path.dirname(filepath), replacement))

    if (!text.startsWith('.')) text = `./${text}`

    const re = find instanceof RegExp ? find : new RegExp(`^${find}`)

    return slash(specifier.replace(re, text))
  }

  const globOptions = { cwd: constants.src, ignore: constants.ignoreFiles }

  glob.sync('**/*.ts{,x}', globOptions).map((file) => {
    const filepath = constants.resolveSrc(file)
    return [filepath, project.addSourceFileAtPath(filepath)] as const
  }).forEach(([filepath, sourceFile]) => {
    sourceFile
      .getExportDeclarations()
      .concat(sourceFile.getImportDeclarations() as any[])
      .forEach((node) => {
        const specifier = node.getModuleSpecifierValue()

        if (!specifier) return

        const newSpecifier = resolveAlias(filepath, specifier)

        if (newSpecifier) node.setModuleSpecifier(newSpecifier)
      })
  })

  await project.emit({ emitOnlyDtsFiles: true })

  // copy dts files to lib
  await Promise.all(glob.sync('**/*.d.ts', { cwd: constants.esm })
    .map(file => fse.copy(constants.resolveEsm(file), constants.resolveCjs(file))))
}
