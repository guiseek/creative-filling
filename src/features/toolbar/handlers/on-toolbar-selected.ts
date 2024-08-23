import {
  onToolbarSelected,
  toolbarSelectImage,
  toolbarSelectText,
} from '../events'
import {dispatch} from '@websqnl/event-flow'

onToolbarSelected((action) => {
  switch (action) {
    case 'image': {
      return dispatch(toolbarSelectImage())
    }
    case 'text': {
      return dispatch(toolbarSelectText())
    }
  }
})
