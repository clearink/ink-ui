import { Project, ts } from 'ts-morph'

import { constants, formatPkgJson } from '../utils'
import { resolveAlias } from '../utils/resolve-alias'

export default async function gen() {
  const project = new Project({
    skipAddingFilesFromTsConfig: true,
    compilerOptions: {
      allowJs: true,
      declaration: true,
      declarationDir: constants.esm,
      emitDeclarationOnly: true,
    },
  })

  // const props = {
  //   component: 'badge',
  //   file: 'components/badge/props',
  //   interface: 'BadgeProps',
  // }

  const filePath = constants.resolveComps('src/button/props.ts')

  const { externals } = await formatPkgJson(constants.resolveComps('./package.json'))

  // 解析interface
  function resolveInterface(filePath: string, name: string) {
    const sourceFile = project.addSourceFileAtPath(filePath)

    const imports = sourceFile.getImportDeclarations()

    imports.forEach((node) => {
      const specifier = node.getModuleSpecifierValue()

      if (!specifier) return

      const newSpecifier = resolveAlias({
        filePath,
        specifier,
        alias: constants.siteAlias,
        externals,
      })

      if (newSpecifier) node.setModuleSpecifier(newSpecifier)
    })

    imports.forEach((e) => {
      console.log(e.getFullText())
    })

    // const declaration = sourceFile.getTypeAlias(name) || sourceFile.getInterface(name)
    const declaration = sourceFile.getInterface(name)

    if (!declaration) return

    declaration.getProperties().forEach((e) => {
      const type = e.getType()
      console.log(e.getName(), type.getText())
    })

    declaration.getExtends().forEach((e) => {
      const type = e.getType()

      console.log(type.getText())
    })
  }

  resolveInterface(filePath, 'ButtonProps')
}
