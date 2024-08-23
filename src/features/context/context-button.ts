import {builtIn} from '@websqnl/elements/shared'
import {Button, Span} from '@websqnl/elements'
import {dispatch} from '@websqnl/event-flow'
import {contextClose} from './events'
import {icon} from '@constants/icon'
import {Context} from './context'

export interface ContextButtonOptions {
  icon?: string
  text: string
  shortcut?: string
}

@builtIn('button', 'cf-context-button')
export class ContextButton extends Button {
  elements: Element[] = []

  constructor(
    public context: Context,
    public options: ContextButtonOptions,
    attrs?: Partial<Button>
  ) {
    super(attrs)

    this.innerHTML = options.icon ?? icon.empty

    this.elements.push(new Span({textContent: options.text}))

    if (options.shortcut) {
      this.elements.push(new Span({textContent: options.shortcut}))
    }

    this.append(...this.elements)
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      dispatch(contextClose({context: this.context, option: this.value}))
    })
  }
}
