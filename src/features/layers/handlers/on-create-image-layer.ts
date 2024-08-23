import {canvasAddLayer} from '@features/canvas'
import {dispatch} from '@websqnl/event-flow'
import {onCreateImageLayer} from '../events'
import {ImageLayer} from '../image-layer'

onCreateImageLayer((data) => {
  const image = new Image()

  image.addEventListener('load', async () => {
    const {width, height} = image

    const layer = new ImageLayer(width, height, 0, 0)

    layer.image.src = data

    await layer.render()

    dispatch(canvasAddLayer(layer))
  })

  image.src = data
})
