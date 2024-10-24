import type { Node, Type, ts } from 'ts-morph'

import formatTypeText from './format-type-text'

// 解析签名的类型
export default function resolveSignatureType(type: Type) {
  const aliasSymbol = type.getAliasSymbol()

  const node = aliasSymbol?.getDeclarations()[0]

  if (!node) return formatTypeText(type)

  const sourceFile = node.getSourceFile()

  const isExternal = /node_modules/.test(sourceFile.getFilePath())

  if (isExternal) return aliasSymbol.getFullyQualifiedName()

  // TODO: 优化 aliasSymbol 处理
  return formatTypeText(aliasSymbol.getDeclaredType())
}
