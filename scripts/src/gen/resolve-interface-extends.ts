import type { ExpressionWithTypeArguments, Project } from 'ts-morph'

import resolveDefinition from './resolve-definition'

// 解析继承的属性
export default function resolveInterfaceExtends(project: Project, expression: ExpressionWithTypeArguments) {
  const type = expression.getType()

  // TODO: 这里存疑 是只获取symbol 还是 aliasSymbol 也获取呢?
  const maybeSymbol = type.getSymbol() || type.getAliasSymbol()

  const node = maybeSymbol?.getDeclarations()[0]

  if (!node) return []

  const filePath = node.getSourceFile().getFilePath()

  const typeName = expression.getExpression().getText()

  return resolveDefinition(project, filePath, typeName)
}
