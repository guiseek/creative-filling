import {createEvent, createListener} from '@websqnl/event-flow'

export const formTextSubmit = createEvent('form.text.submit')
export const onFormTextSubmit = createListener('form.text.submit')

export const formFillSubmit = createEvent('form.fill.submit')
export const onFormFillSubmit = createListener('form.fill.submit')
