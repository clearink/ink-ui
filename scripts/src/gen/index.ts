import type { SourceFile } from 'ts-morph'

import { Project } from 'ts-morph'

import { constants } from '../utils'

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

  const filepath = constants.resolveComps('src/button/props.ts')

  t(project.addSourceFileAtPath(filepath))

  function t(sourceFile: SourceFile) {
    sourceFile.getInterfaces().forEach((declaration) => {
      const name = declaration.getName()

      console.log(`${name} {\n`)

      // declaration.getType().getApparentProperties().forEach((e) => {
      //   console.log(e.getName())
      // })
      declaration.getProperties().forEach((e) => {
        // 如果是引用其他文件的定义要如何判断呢?

        // console.log(e.getSourceFile().getFilePath())

        const name = e.getName()
        const type = e.getType()

        const aliasSymbol = type.getAliasSymbol()

        aliasSymbol?.getDeclarations().forEach((node) => {
          const filepath = node.getSourceFile().getFilePath()

          if (/node_modules/.test(filepath)) {
            // 跳过 node_modules
            return
          }

          console.log(name, node)
        })

        // console.log(
        //   e.getName(),
        //   a.getText(),
        //   a.getBaseTypes().map(aaa => aaa.getText()),
        //   // a.getUnionTypes().map(aaa => aaa.getText()),
        // )
      })

      declaration.getExtends().forEach((e) => {
        const de = e.getType()

        console.log(de.getText(), de.getTypeArguments().map(e => e.getText()))
      })
    })
  }
}
