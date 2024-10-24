import type { Project } from 'ts-morph'

import { pushItem } from '@internal/utils'

import resolveInterfaceExtends from './resolve-interface-extends'
import resolveInterfaceProperty from './resolve-interface-property'

export default function resolveDefinition(
  project: Project,
  filePath: string,
  definitionName: string,
) {
  const sourceFile = project.getSourceFile(filePath) || project.addSourceFileAtPath(filePath)

  const result: any[] = []

  sourceFile.getInterfaces().forEach((declaration) => {
    if (declaration.getName() !== definitionName) return

    // 解析自身属性
    declaration.getProperties().forEach((property) => {
      const resolved = resolveInterfaceProperty(property)

      resolved && result.push(resolved)
    })

    // 解析继承属性
    declaration.getExtends().forEach((expression) => {
      pushItem(result, resolveInterfaceExtends(project, expression))
    })
  })

  // TODO
  sourceFile.getTypeAliases().forEach((declaration) => {
    if (declaration.getName() !== definitionName) return

    declaration.getType()
  })

  return result
}
