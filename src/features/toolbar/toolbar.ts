import {builtIn} from '@websqnl/elements/shared'
import {dispatch} from '@websqnl/event-flow'
import {Button} from '@websqnl/elements'
import {selectToolbar} from './events'
import {values} from '@shared/utils'
import {icon} from '@constants/icon'

@builtIn('menu', 'cf-toolbar')
export class Toolbar extends HTMLMenuElement {
  buttons = {
    image: this.#button(icon.image, 'image', 'Select image'),
    text: this.#button(icon.text, 'text', 'Write text'),
  }

  connectedCallback() {
    for (const button of values(this.buttons)) {
      this.append(button)

      button.addEventListener('click', () => {
        const action = button.value as ToolbarAction

        dispatch(selectToolbar(action))
      })
    }
  }

  #button(innerHTML: string, value: ToolbarAction, title: string) {
    return new Button({innerHTML, value, title, type: 'button'})
  }
}
