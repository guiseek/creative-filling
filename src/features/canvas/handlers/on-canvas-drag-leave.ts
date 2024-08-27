import {onCanvasDragLeave} from '../events'
import {canvas} from '../canvas'

onCanvasDragLeave((ev) => {
  ev.preventDefault()
  canvas.style.border = `0.2em solid rgb(var(--cf-onsurface-rgb))`
})
