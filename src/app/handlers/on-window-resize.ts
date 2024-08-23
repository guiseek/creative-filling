import {dispatch} from '@websqnl/event-flow'
import {onWindowResize} from '../events'
import {canvasUpdateSize} from '@features/canvas'

onWindowResize((size) => {
  const ideal = size < 1080 ? 540 : 1080
  const {clientWidth: w, clientHeight: h} = root

  dispatch(canvasUpdateSize({current: {w, h}, ideal}))

  document.documentElement.style.setProperty(
    '--cf-canvas-max-size',
    `${ideal}px`
  )
})
