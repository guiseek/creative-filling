import {assign, builtIn} from '@websqnl/elements/shared'

@builtIn('dialog', 'web-dialog')
export class Dialog extends HTMLDialogElement {
  constructor(attrs: Partial<HTMLDialogElement> = {}) {
    super()
    assign(this, attrs)
    this.#animate('normal')
  }

  close(returnValue?: string) {
    this.#animate('reverse').addEventListener('finish', () => {
      this.close(returnValue)
      this.remove()
    })
  }

  #animate(direction: PlaybackDirection) {
    return this.animate(
      [
        {
          transform: `translateY(1000px) scaleY(2.5) scaleX(0.2)`,
          transformOrigin: `50% 100%`,
          filter: `blur(40px)`,
          opacity: `0`,
        },
        {
          transform: `translateY(0) scaleY(1) scaleX(1)`,
          transformOrigin: `50% 50%`,
          filter: `blur(0)`,
          opacity: `1`,
        },
      ],
      {
        direction,
        duration: 600,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
      }
    )
  }
}
