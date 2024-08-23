import {assign, builtIn} from '@websqnl/elements/shared'
import {dispatch, type Event} from '@websqnl/event-flow'
import {Button, Footer, Input} from '@websqnl/elements'
import {Dialog} from '@shared/elements'
import {FormGroup} from './form-group'
import {values} from '@websqnl/utils'

@builtIn('dialog', 'cf-form-dialog')
export class FormDialog<T extends object> extends Dialog {
  form: FormGroup<T>

  actions: Record<string, Button>

  constructor(
    controls: Record<keyof T, Input>,
    stateEvent: Event<any>,
    attrs: Partial<HTMLDialogElement> = {}
  ) {
    super()
    assign(this, attrs)

    this.form = new FormGroup<T>(controls, {
      onsubmit: (ev) => {
        ev.preventDefault()
        dispatch(stateEvent(this.form.value))
        this.close()
      },
    })

    this.actions = {
      confirm: new Button({
        type: 'submit',
        textContent: 'Confirm',
      }),
      cancel: new Button({
        type: 'button',
        textContent: 'Cancel',
        onclick: () => {
          this.close('cancel')
        },
      }),
    }

    const footer = new Footer()
    footer.append(...values(this.actions))
    this.form.append(footer)

    this.append(this.form)
  }

  connectedCallback() {
    setTimeout(() => {
      document.addEventListener('click', (e) => {
        const target = e.target as Element
        if (!this.form.contains(target)) {
          this.close()
        }
      })
    })
  }
}
