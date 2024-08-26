import {ContextButton} from '../context-button'
import {onContextOpen} from '../events'
import {icon} from '@constants/icon'
import {Context} from '../context'
import { canvas } from '@features/canvas'

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

  const orders = canvas.layers.map(l => l.order)
  
  context.addButton(
    new ContextButton(
      context,
      {
        icon: icon.bringToFront,
        text: 'Trazer para frente',
      },
      {
        disabled: layer.order === Math.max(...orders),
        value: 'bring-to-front',
      }
    )
  )
  
  context.addButton(
    new ContextButton(
      context,
      {
        icon: icon.sendToBack,
        text: 'Enviar para trás',
      },
      {
        disabled: layer.order === Math.min(...orders),
        value: 'send-to-back',
      }
    )
  )

  context.addDivider()

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
