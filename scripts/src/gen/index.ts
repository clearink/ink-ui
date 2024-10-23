import type { Symbol as AliasSymbol, SourceFile, Type, ts } from 'ts-morph'

import { glob } from 'fast-glob'
import path from 'node:path'
import slash from 'slash'
import { Node, Project } from 'ts-morph'

import { constants, formatPkgJson, moduleMatches } from '../utils'
import { resolveAlias } from '../utils/resolve-alias'

/**
 * 跨package解析是会有路径问题的, 能否在components里面解析,然后输出到site呢?
 */

export default async function gen() {
  const project = new Project({ skipAddingFilesFromTsConfig: true })

  const { externals } = await formatPkgJson(constants.resolveComps('./package.json'))

  // // 解析全部的路径 alias , 可能会慢,但是比较省事
  // glob.sync('**/*.ts{,x}', globOptions).map((file) => {
  //   const filePath = constants.resolveComps('src', file)
  //   return [filePath, project.addSourceFileAtPath(filePath)] as const
  // }).forEach(([filePath, sourceFile]) => {
  //   sourceFile
  //     .getExportDeclarations()
  //     .concat(sourceFile.getImportDeclarations() as any[])
  //     .forEach((node) => {
  //       const specifier = node.getModuleSpecifierValue()

  //       if (!specifier) return

  //       const newSpecifier = resolveAlias({ filePath, specifier, externals, alias: constants.siteAlias })

  //       if (newSpecifier) node.setModuleSpecifier(newSpecifier)
  //     })
  // })

  const filePath = constants.resolveComps('src', 'button', 'props.ts')

  // 解析interface
  const globOptions = { cwd: constants.resolveComps('src'), ignore: constants.ignoreFiles }

  // 1. 先解析为正确的路径(暂时先全部替换, 之后换成按需替换)
  glob.sync('**/*.ts{,x}', globOptions).map((file) => {
    const filePath = constants.resolveComps('src', file)
    return [filePath, project.addSourceFileAtPath(filePath)] as const
  }).forEach(([filePath, sourceFile]) => {
    sourceFile
      .getExportDeclarations()
      .concat(sourceFile.getImportDeclarations() as any[])
      .forEach((node) => {
        const specifier = node.getModuleSpecifierValue()

        if (!specifier) return

        const newSpecifier = resolveAlias({
          filePath,
          specifier,
          externals,
          alias: constants.siteAlias,
        })

        if (newSpecifier) node.setModuleSpecifier(newSpecifier)
      })
  })

  function resolveInterface(filePath: string, definitionName: string) {
    const sourceFile = project.addSourceFileAtPath(filePath)

    const declaration = sourceFile.getInterface(definitionName)

    if (!declaration) return

    declaration.getProperties().forEach((property) => {
      const tags = property.getJsDocs().flatMap(node => node.getTags())

      if (!tags.find(tag => tag.getTagName() === 'zh')) return

      const type = property.getType()

      const item = {
        // 属性
        name: property.getName(),
        // 描述
        desc: {
          zh: tags.find(tag => tag.getTagName() === 'zh')?.getCommentText(),
          en: tags.find(tag => tag.getTagName() === 'en')?.getCommentText(),
        },
        // 类型
        type: '',
        // 必填
        required: !property.hasQuestionToken(),
        // 默认值
        default: tags.find(tag => tag.getTagName() === 'default')?.getCommentText(),
        // 版本
        version: tags.find(tag => tag.getTagName() === 'version')?.getCommentText(),
      }

      // 有 aliasSymbol 代表是外部引入的类型
      const aliasSymbol = type.getAliasSymbol()

      item.type = resolveAliasSymbolDefinition(aliasSymbol)

      console.log(item)
    })

    declaration.getExtends().forEach((e) => {
      const type = e.getType()

      const identifier = e.getExpression()

      const node = type.getSymbol()?.getDeclarations()[0]

      if (node) resolveInterface(node.getSourceFile().getFilePath(), identifier.getText())
    })
  }

  resolveInterface(filePath, 'ButtonProps2')
}

function resolveAliasSymbolDefinition(aliasSymbol: AliasSymbol | undefined) {
  const node = aliasSymbol?.getDeclarations()[0]

  if (!node) return

  const sourceFile = node.getSourceFile()

  const isExternal = /node_modules/.test(sourceFile.getFilePath())

  // 第三方模块 无需解析
  if (isExternal) return aliasSymbol.getFullyQualifiedName()

  return resolveTypeDefinition(node.getType())
}

function resolveTypeDefinition(type: Type<ts.Type> | undefined) {
  if (!type) return undefined

  if (type.isAnonymous())
    return 'unknown'

  if (type.isAny())
    return 'any'

  if (type.isArray())
    return `${resolveTypeDefinition(type.getArrayElementType())}[]`

  if (type.isBigInt())
    return type.getTargetType

  if (type.isUnion())
    return type.getUnionTypes().map(e => e.getText()).join('|')

  return type.getText()
}
