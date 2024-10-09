import type { Tokens } from 'marked'

import fse from 'fs-extra'
import { marked } from 'marked'

import makeSourceFile from '../../utils/make-source-file'

export default function formatContent(filePath: string) {
  if (!fse.existsSync(filePath)) return makeSourceFile()[0]

  const fileContent = fse.readFileSync(filePath, { encoding: 'utf8' })

  const tokens = marked.lexer(fileContent)

  const token = tokens.find(_ => _.type === 'code') as Tokens.Code | undefined

  return token?.text || makeSourceFile()[0]
}
