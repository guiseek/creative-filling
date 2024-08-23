import {createOverlay, Overlay} from '@shared/elements'
import {HorizontalRule, Menu} from '@websqnl/elements'
import {builtIn} from '@websqnl/elements/shared'
import {ContextButton} from './context-button'

@builtIn('menu', 'cf-context')
export class Context extends Menu {
  #buttons: ContextButton[] = []

  #overlay: Overlay

  constructor(public layer: LayerLike, attrs?: Partial<Menu>) {
    super(attrs)

    this.#overlay = createOverlay('cf-context-overlay')
  }

  connectedCallback() {
    this.classList.add('cf-context')
  }

  addButton(button: ContextButton) {
    this.#buttons.push(button)
    this.append(button)
  }

  addDivider() {
    this.append(new HorizontalRule())
  }

  open({x, y}: Vector2Like) {
    this.style.top = `${y}px`
    this.style.left = `${x}px`
    this.style.display = `flex`

    this.#overlay.append(this)

    document.addEventListener('click', (e) => {
      const target = e.target as Element
      if (!this.contains(target)) {
        this.close()
      }
    })
  }

  close() {
    this.style.display = 'none'
    this.#overlay.remove()
  }
}
