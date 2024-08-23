import {createTextLayer} from '@features/layers'
import {dispatch} from '@websqnl/event-flow'
import {onFormTextSubmit} from '../events'

onFormTextSubmit(async (value) => {
  dispatch(createTextLayer(value))
})
