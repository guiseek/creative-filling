import {onCanvasUpdateSize} from '../events'
import {percent} from '@shared/utils'
import {canvas} from '../canvas'

onCanvasUpdateSize((value) => {
  const min = Math.min(value.current.w, value.current.h)
  const relative = percent(min, value.ideal)
  const size = relative > 100 ? value.ideal : min
  canvas.setSize(size)
})
