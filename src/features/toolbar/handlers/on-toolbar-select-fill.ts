import {FormDialog, formFillSubmit} from '@features/forms'
import {onToolbarSelectFill} from '../events'
import {Input} from '@websqnl/elements'

onToolbarSelectFill(() => {
  const color = new Input({
    type: 'color',
    name: 'color',
    value: '#000000',
  })

  const controls = {color}

  const dialog = new FormDialog<FillForm>(controls, formFillSubmit)

  document.body.insertAdjacentElement('beforeend', dialog)

  dialog.showModal()
})
