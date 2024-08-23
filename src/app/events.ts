import {createEvent, createListener} from '@websqnl/event-flow'

export const windowResize = createEvent('window.resize')
export const onWindowResize = createListener('window.resize')
