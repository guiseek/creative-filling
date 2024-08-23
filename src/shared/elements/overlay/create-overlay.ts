import {Overlay} from './overlay'

export const createOverlay = (id: string) => {
  const overlay = new Overlay(id)

  document.body.insertAdjacentElement('beforeend', overlay)

  const overlayObserver = new MutationObserver(() => {
    overlay.hidden = overlay.childElementCount < 1
  })

  overlayObserver.observe(overlay, {childList: true})

  return overlay
}
