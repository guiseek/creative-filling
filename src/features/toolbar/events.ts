import {createEvent, createListener} from '@websqnl/event-flow'

export const selectToolbar = createEvent('toolbar.selected')
export const onToolbarSelected = createListener('toolbar.selected')

export const toolbarSelectImage = createEvent('toolbar.select.image')
export const onToolbarSelectImage = createListener('toolbar.select.image')

export const toolbarSelectText = createEvent('toolbar.select.text')
export const onToolbarSelectText = createListener('toolbar.select.text')
