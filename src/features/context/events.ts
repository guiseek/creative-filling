import { createEvent, createListener } from "@websqnl/event-flow";

export const contextOpen = createEvent('context.open')
export const onContextOpen = createListener('context.open')

export const contextClose = createEvent('context.close')
export const onContextClose = createListener('context.close')