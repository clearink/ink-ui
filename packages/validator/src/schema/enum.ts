import type { Writable } from '@internal/types'

import { isUndefined } from '@internal/utils'

import type { Context } from '../interface'

import { enums } from '../locales/default'
import { Invalid, Valid } from '../make_rule'
import BaseSchema from './base'

export type EnumItem = boolean | number | string | symbol
export type EnumInput = Readonly<[EnumItem, ...EnumItem[]]>

/** schema =================================================================== */

export default class EnumSchema<T extends EnumInput> extends BaseSchema<T[number] | undefined> {
  constructor(private readonly inner: T) {
    super()
  }

  static create<U extends EnumItem, E extends Readonly<[U, ...U[]]>>(
    inner: E,
  ): EnumSchema<Writable<E>>
  static create<U extends EnumItem, E extends [U, ...U[]]>(inner: E) {
    return new EnumSchema<E>(inner)
  }

  /** ==================================================== */
  /** validate                                             */
  /** ==================================================== */

  _validate(value: T[number] | undefined, context: Context) {
    if (isUndefined(value)) return Valid(value)

    if (!this.inner.includes(value)) return Invalid(context)(enums.invalid, { enums: this.inner, value })

    return super._validate(value, context)
  }

  /** ==================================================== */
  /** feature                                              */
  /** ==================================================== */

  get enum() {
    return this.inner
  }
}
