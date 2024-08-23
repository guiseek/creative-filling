import {builtIn} from '@websqnl/elements/shared'
import {serialize, values} from '@shared/utils'
import {Form, Input} from '@websqnl/elements'

@builtIn('form', 'cf-form-group')
export class FormGroup<T extends object> extends Form {
  constructor(
    public controls: Record<string, Input>,
    attrs: Partial<Form> = {}
  ) {
    super(attrs)

    this.append(...values(this.controls))
  }

  get value() {
    return serialize<T>(this)
  }
}
