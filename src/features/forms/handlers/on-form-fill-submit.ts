import {onFormFillSubmit} from '../events'
import {canvas} from '@features/canvas'

onFormFillSubmit((value) => {
  canvas.setFill(value.color)
  canvas.render().then()
})
