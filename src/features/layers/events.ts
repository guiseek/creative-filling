import {createEvent, createListener} from '@websqnl/event-flow'

export const createImageLayer = createEvent('layer.create.image')
export const onCreateImageLayer = createListener('layer.create.image')

export const createTextLayer = createEvent('layer.create.text')
export const onCreateTextLayer = createListener('layer.create.text')
