import {canvasAddLayer} from '@features/canvas'
import {dispatch} from '@websqnl/event-flow'
import {onCreateTextLayer} from '../events'
import {TextLayer} from '../text-layer'

onCreateTextLayer(async ({text, size, color, bold}) => {
  const layer = new TextLayer(text.length * size * 5, size * 12, 0, 0)

  layer.setText(text).setSize(size).setColor(color).setResizable(false)

  if (bold) {
    await layer.setWeight('bold').render()
    dispatch(canvasAddLayer(layer))
  } else {
    await layer.render()
    dispatch(canvasAddLayer(layer))
  }
})
