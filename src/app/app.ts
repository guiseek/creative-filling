import {dispatch} from '@websqnl/event-flow'
import {Toolbar} from '../features/toolbar'
import {canvas} from '../features/canvas'
import {throttle} from '@shared/utils'
import {windowResize} from './events'

export const app = () => {
  const toolbar = new Toolbar()

  const getSize = () => Math.min(innerWidth, innerHeight)

  dispatch(windowResize(getSize()))

  onresize = throttle(() => dispatch(windowResize(getSize())), 250)

  root.append(toolbar, canvas)
}
