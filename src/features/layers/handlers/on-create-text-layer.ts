import {canvasAddLayer} from '@features/canvas'
import {dispatch} from '@websqnl/event-flow'
import {onCreateTextLayer} from '../events'
import {TextLayer} from '../text-layer'

onCreateTextLayer(async ({text, size, bold}) => {
  const layer = new TextLayer(540, 540, 0, 0)

  layer.setText(text).setSize(size)

  if (bold) {
    await layer.setWeight('bold').render()
    dispatch(canvasAddLayer(layer))
  } else {
    await layer.render()
    dispatch(canvasAddLayer(layer))
  }
})
