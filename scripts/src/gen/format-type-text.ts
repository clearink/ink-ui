import type { Type } from 'ts-morph'

// 根据 typeFlags 的类型进行格式化
import { TypeFlags } from 'ts-morph'

export default function formatTypeText(type: Type) {
  if (type.isAny()) return 'any'

  if (type.isBigInt()) return 'BigInt'

  if (type.isBoolean()) return 'boolean'

  if (type.isString()) return 'string'

  if (type.isUnion())
    debugger
  return type.getUnionTypes().map(formatTypeText).join('|')

}
