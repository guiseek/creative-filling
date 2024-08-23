import {onContextClose} from '../events'
import {canvas} from '@features/canvas'

onContextClose(({context, option}) => {
  
  if (option === 'remove') {
    canvas.removeLayer(context.layer)
  }
  
  canvas.setIsContextMenu(false)
  
  context.close()
})
