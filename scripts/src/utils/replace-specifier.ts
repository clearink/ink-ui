import type { ExportDeclaration, ImportDeclaration, SourceFile } from 'ts-morph'

import type { ResolveAliasOptions } from './resolve-alias'

import { resolveAlias } from './resolve-alias'

// 可能不需要递归
export default function replaceSpecifier(
  sources: SourceFile[],
  externals: ResolveAliasOptions['externals'],
  alias: ResolveAliasOptions['alias'],
) {
  sources.forEach((sourceFile) => {
    const filePath = sourceFile.getFilePath()

    const resolveCallback = (node: ExportDeclaration | ImportDeclaration) => {
      const specifier = node.getModuleSpecifierValue()

      const newSpecifier = resolveAlias({ specifier, filePath, externals, alias })

      if (newSpecifier) node.setModuleSpecifier(newSpecifier)
    }

    sourceFile.getImportDeclarations().forEach(resolveCallback)

    sourceFile.getExportDeclarations().forEach(resolveCallback)
  })
}
