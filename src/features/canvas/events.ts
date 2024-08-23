import { createEvent, createListener } from "@websqnl/event-flow";

export const canvasRequestRender = createEvent("canvas.render.request");
export const onCanvasRenderRequest = createListener("canvas.render.request");

export const canvasUpdateSize = createEvent("canvas.update.size");
export const onCanvasUpdateSize = createListener("canvas.update.size");

export const canvasAddLayer = createEvent("canvas.add.layer");
export const onCanvasAddLayer = createListener("canvas.add.layer");
