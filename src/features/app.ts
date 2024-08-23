import {canvas, canvasUpdateSize} from './canvas'
import {dispatch} from '@websqnl/event-flow'
import {Toolbar} from './toolbar'

export const app = () => {
  const toolbar = new Toolbar()

  const {clientWidth: w, clientHeight: h} = root
  
  dispatch(canvasUpdateSize({current: {w, h}, ideal: 540}))

  root.append(toolbar, canvas)
}
