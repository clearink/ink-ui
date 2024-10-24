import type { Project } from 'ts-morph'

import { glob } from 'fast-glob'
import path from 'node:path'

import type { ResolveAliasOptions } from '../utils/resolve-alias'

import { constants } from '../utils'
import { resolveAlias } from '../utils/resolve-alias'

// 可能不需要递归
export default function replaceSpecifier(
  project: Project,
  externals: ResolveAliasOptions['externals'],
  alias: ResolveAliasOptions['alias'],
) {
  const root = constants.resolveComps('src')

  const globOptions = { cwd: root, ignore: constants.ignoreFiles }

  glob.sync('**/*.ts{,x}', globOptions).forEach((file) => {
    const filePath = path.resolve(root, file)

    const sourceFile = project.addSourceFileAtPath(filePath)

    sourceFile
      .getImportDeclarations()
      .concat(sourceFile.getExportDeclarations() as any[])
      .forEach((node) => {
        const specifier = node.getModuleSpecifierValue()

        if (!specifier) return

        const newSpecifier = resolveAlias({ filePath, specifier, externals, alias })

        if (newSpecifier) node.setModuleSpecifier(newSpecifier)
      })
  })
}
