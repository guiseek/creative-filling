import {
  canvas,
  canvasDragLeave,
  canvasDragOver,
  canvasDropImage,
} from '../features/canvas'
import {dispatch} from '@websqnl/event-flow'
import {Toolbar} from '../features/toolbar'
import {throttle} from '@shared/utils'
import {windowResize} from './events'

export const app = () => {
  const toolbar = new Toolbar()

  const getSize = () => Math.min(innerWidth, innerHeight)

  dispatch(windowResize(getSize()))

  onresize = throttle(() => dispatch(windowResize(getSize())), 250)

  canvas.ondragover = (ev) => dispatch(canvasDragOver(ev))
  canvas.ondragleave = (ev) => dispatch(canvasDragLeave(ev))
  canvas.ondrop = (ev) => dispatch(canvasDropImage(ev))

  root.append(toolbar, canvas)
}
