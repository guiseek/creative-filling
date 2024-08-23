import {FormDialog, formTextSubmit} from '@features/forms'
import {onToolbarSelectText} from '../events'
import {Input} from '@websqnl/elements'

onToolbarSelectText(() => {
  const text = new Input({
    type: 'text',
    name: 'text',
    placeholder: 'Texto',
    required: true,
  })

  const size = new Input({
    type: 'number',
    name: 'size',
    step: '0.1',
    value: '3.2',
  })

  const bold = new Input({
    type: 'checkbox',
    name: 'bold',
    value: 'true',
    checked: false,
  })

  const dialog = new FormDialog<TextForm>({text, size, bold}, formTextSubmit)

  document.body.insertAdjacentElement('beforeend', dialog)

  dialog.showModal()
})
