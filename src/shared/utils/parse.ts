import {is} from './is'

export const parse = <T>(value: unknown) => {
  let parsed = value

  if (is.boolean(value)) {
    return value
  }

  if (is.date(value)) {
    parsed = new Date(value.toString())
    return parsed
  }

  if (is.number(value)) {
    parsed = value
    return parsed
  }

  if (is.string(value)) {
    parsed = value
    return parsed
  }

  return parsed as T
}
