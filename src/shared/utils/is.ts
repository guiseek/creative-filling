import {getType} from './get-type'

export const is = {
  number(value: unknown): value is number {
    return getType(value) === 'number'
  },
  string(value: unknown): value is string {
    return getType(value) === 'string'
  },
  boolean(value: unknown): value is boolean {
    return getType(value) === 'boolean'
  },
  date(value: unknown): value is Date {
    return getType(value) === 'date'
  },
}
