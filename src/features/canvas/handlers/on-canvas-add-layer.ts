import {onCanvasAddLayer} from '../events'
import {canvas} from '../canvas'

onCanvasAddLayer((layer) => {
  canvas.addLayer(layer)
  canvas.render().then()
})
