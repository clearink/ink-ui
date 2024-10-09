import type { Tokens, TokensList } from 'marked'

import fse from 'fs-extra'
import { marked } from 'marked'

import groupTokens from '../../utils/group-tokens'
import { isCodeToken, isHeadingToken } from '../../utils/is'
import makeSourceFile from '../../utils/make-source-file'

function formatDescription(tokens: TokensList): Record<string, string> {
  const entries = groupTokens(tokens, isHeadingToken)
    .slice(1)
    .reduce((result, [heading, list]) => {
      result.push([heading.text, list.map(_ => _.raw).join('')])
      return result
    }, [] as [string, string][])

  return Object.fromEntries(entries)
}

function formatSourceCode(tokens: TokensList) {
  const token = groupTokens(tokens, isCodeToken)
    .slice(1)
    .reduce<null | Tokens.Code>((result, [code]) => result || code, null)

  return token ? [token.text, token.raw] : makeSourceFile()
}

export default function formatContent(filePath: string) {
  if (!fse.existsSync(filePath)) return makeSourceFile()

  const fileContent = fse.readFileSync(filePath, { encoding: 'utf8' })

  const tokens = marked.lexer(fileContent)

  const [sourceCode, rawText] = formatSourceCode(tokens)

  return [sourceCode, rawText, formatDescription(tokens)] as const
}
