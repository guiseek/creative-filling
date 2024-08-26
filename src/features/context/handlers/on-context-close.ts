import {onContextClose} from '../events'
import {canvas} from '@features/canvas'

onContextClose(({context, option}) => {
  if (option === 'bring-to-front') {
    context.layer.setOrder(context.layer.order + 1)
  }

  if (option === 'send-to-back') {
    context.layer.setOrder(context.layer.order - 1)
  }

  if (option === 'remove') {
    canvas.removeLayer(context.layer)
  }

  canvas.setIsContextMenu(false)

  context.close()
})
