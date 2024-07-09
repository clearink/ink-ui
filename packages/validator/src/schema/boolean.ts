import { isBoolean, isUndefined } from '@internal/utils'

import { type Context, type Message } from '../interface'
import { boolean } from '../locales/default'
import { Invalid, Valid, makeRule } from '../make_rule'
import BaseSchema from './base'

export default class BooleanSchema extends BaseSchema<boolean | undefined> {
  constructor(private message: Message = boolean.invalid) {
    super()
  }

  static create(message: Message = boolean.invalid) {
    return new BooleanSchema(message)
  }

  /** ==================================================== */
  /** validate                                             */
  /** ==================================================== */

  _validate(value: boolean | undefined, context: Context) {
    if (isUndefined(value)) return Valid(value)

    if (!isBoolean(value)) return Invalid(context)(this.message, { value })

    return super._validate(value, context)
  }

  /** ==================================================== */
  /** feature                                              */
  /** ==================================================== */

  // 二者也是互斥的，不能既是 true 又是 false 吧
  false(message: Message = boolean.false) {
    const rule = (value: boolean) => value === false
    return this._refine('boolean', makeRule(rule, message))
  }

  true(message: Message = boolean.true) {
    const rule = (value: boolean) => value === true
    return this._refine('boolean', makeRule(rule, message))
  }
}
