import {builtIn} from '@websqnl/elements/shared'

@builtIn('div', 'cf-overlay')
export class Overlay extends HTMLDivElement {
  constructor(public id: string) {
    super()
  }

  #hidden = true
  set hidden(value) {
    this.#hidden = value
    this.style.display = !value ? 'block' : 'none'
  }
  get hidden() {
    return this.#hidden
  }

  toggle() {
    this.style.display = this.hidden ? 'block' : 'none'
  }
}
