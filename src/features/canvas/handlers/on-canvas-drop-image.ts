import {getMimeType, loadImage} from '@shared/utils'
import {createImageLayer} from '@features/layers'
import {dispatch} from '@websqnl/event-flow'
import {onCanvasDropImage} from '../events'
import {canvas} from '../canvas'

onCanvasDropImage((ev) => {
  ev.preventDefault()
  canvas.style.border = `0.2em solid rgb(var(--cf-onsurface-rgb))`

  const [file] = ev.dataTransfer?.files ?? []
  if (file) {
    getMimeType(file).then((mimeType) => {
      if (mimeType && mimeType.startsWith('image/')) {
        loadImage(file).then((data) => {
          dispatch(createImageLayer(data))
        })
      }
    })
  }
})
