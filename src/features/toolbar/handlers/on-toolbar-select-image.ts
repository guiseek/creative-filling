import {createImageLayer} from '@features/layers'
import {onToolbarSelectImage} from '../events'
import {dispatch} from '@websqnl/event-flow'
import {Input} from '@websqnl/elements'
import {loadImage} from '@shared/utils'

onToolbarSelectImage(() => {
  const input = new Input({
    type: 'file',
    accept: 'image/svg+xml,image/png',
    onchange() {
      const [file] = input.files ?? []
      if (file) {
        loadImage(file).then((data) => {
          dispatch(createImageLayer(data))
        })
      }
    },
  })

  input.click()
})
