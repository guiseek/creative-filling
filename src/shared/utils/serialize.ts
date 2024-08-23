import {entries, Value} from '@websqnl/utils'
import {formValue} from './form-value'
import {parse} from './parse'

export const serialize = <T extends object>(form: T | object): T => {
  const data = form instanceof HTMLFormElement ? formValue<T>(form) : form
  return entries(data).reduce((prev, [key, val]) => {
    return {...prev, [key]: parse(val as Value)}
  }, data) as T
}
