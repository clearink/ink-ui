import type { Tokens, TokensList } from 'marked'

export function isHeadingToken(token: TokensList[number]): token is Tokens.Heading {
  return token.type === 'heading' && token.depth <= 2
}

export function isCodeToken(token: TokensList[number]): token is Tokens.Code {
  return token.type === 'code'
}
