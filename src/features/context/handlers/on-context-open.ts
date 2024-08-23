import {ContextButton} from '../context-button'
import {onContextOpen} from '../events'
import {icon} from '@constants/icon'
import {Context} from '../context'

onContextOpen(({layer, position}) => {
  const context = new Context(layer)

  if (layer.type === 'text') {
    context.addButton(
      new ContextButton(
        context,
        {
          icon: icon.edit,
          text: 'Editar',
        },
        {
          value: 'edit',
        }
      )
    )

    context.addDivider()
  }

  context.addButton(
    new ContextButton(
      context,
      {
        icon: icon.delete,
        text: 'Remover',
        shortcut: 'Cmd+Del',
      },
      {
        value: 'remove',
      }
    )
  )

  context.open(position)
})
