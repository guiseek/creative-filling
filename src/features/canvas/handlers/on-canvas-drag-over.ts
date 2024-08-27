import {onCanvasDragOver} from '../events'
import {canvas} from '../canvas'

onCanvasDragOver((ev) => {
  ev.preventDefault()
  canvas.style.border = `0.2em solid lime`
})
