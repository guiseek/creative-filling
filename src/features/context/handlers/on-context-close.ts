import {onContextClose} from '../events'
import {canvas} from '@features/canvas'

onContextClose(({context, option}) => {
  if (option === 'bring-to-front') {
    canvas.bringLayerToFront(context.layer)
  }

  if (option === 'send-to-back') {
    canvas.sendLayerToBack(context.layer)
  }

  if (option === 'remove') {
    canvas.removeLayer(context.layer)
  }

  canvas.setIsContextMenu(false)

  context.close()
})
