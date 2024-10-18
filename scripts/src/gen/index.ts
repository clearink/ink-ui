import type { SourceFile } from 'ts-morph'

import path from 'node:path'
import { Project } from 'ts-morph'

import { constants, moduleMatches } from '../utils'

export default async function gen() {
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      declarationDir: constants.esm,
      emitDeclarationOnly: true,
    },
    skipAddingFilesFromTsConfig: true,
  })

  const filepath = constants.resolveComps('src/button/props.ts')

  const set = new Set()

  t(project.addSourceFileAtPath(filepath))

  function t(sourceFile: SourceFile) {
    const text = sourceFile.getFullText()

    if (set.has(text)) return

    set.add(text)

    sourceFile.getInterfaces().forEach((declaration) => {
      const name = declaration.getName()

      if (name === 'ButtonProps2') {
        console.log(`${declaration.getName()} {\n`)

        declaration.getExtends().forEach((e) => {
          console.log(e.getText(), e.getType().getTypeArguments())
        })
      }
    })
  }
}
