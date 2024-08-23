import {canvas, canvasUpdateSize} from './canvas'
import {dispatch} from '@websqnl/event-flow'
import {throttle} from '@shared/utils'
import {Toolbar} from './toolbar'

export const app = () => {
  const toolbar = new Toolbar()

  const {clientWidth: w, clientHeight: h} = root

  dispatch(canvasUpdateSize({current: {w, h}, ideal: 540}))

  addEventListener(
    'resize',
    throttle(() => {
      const {clientWidth: w, clientHeight: h} = root

      dispatch(canvasUpdateSize({current: {w, h}, ideal: 540}))
    }, 250)
  )

  root.append(toolbar, canvas)
}
