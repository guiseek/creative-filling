/// <reference types="vite/client" />

declare const root: HTMLDivElement

type TypeValue = 'boolean' | 'date' | 'number' | 'string'

interface Vector2Like {
  x: number
  y: number
}

interface Vector2Direction {
  x: boolean
  y: boolean
}

interface RectLike {
  x: number
  y: number
  w: number
  h: number
}

type LayerType = 'image' | 'text' | 'fill'

type TextWeight = 'bold' | 'normal'

interface CanvasLike {
  removeLayer(layer: LayerLike)
}

type ParentLayer = CanvasLike

interface LayerLike extends OffscreenCanvas {
  id: string

  type: LayerType

  active: boolean

  order: number

  position: Vector2Like

  dragging: boolean

  resizing: boolean

  draggable: boolean

  resizable: boolean

  hovered: boolean

  offset: Vector2Like

  rect: RectLike

  render(): Promise<void>

  setActive(active: boolean): this

  setOrder(order: number): this

  setDraggable(draggable: boolean): this

  setResizable(resizable: boolean): this

  // setResizing(resizing: boolean): this

  setHovered(hovered: boolean): this

  startDrag(vector: Vector2Like): void

  dragTo(vector: Vector2Like): void

  stopDrag(): void

  startResize(direction: Vector2Direction): void

  resizeTo(vector: Vector2Like): void

  stopResize(): void
}

interface ContextLike extends HTMLMenuElement {
  layer: LayerLike
  open({x, y}: Vector2Like): void
  close(): void
}

interface ContextOpenEvent {
  layer: LayerLike
  position: Vector2Like
}

interface ContextCloseEvent {
  option: string | null
  context: ContextLike
}

interface TextForm {
  text: string
  color: string
  size: number
  bold: boolean
}

interface FillForm {
  color: string
}

interface StateEventMap {
  'form.text.submit': TextForm
  'form.fill.submit': FillForm

  'canvas.render.request': void
  'canvas.update.size': CanvasSize
  'canvas.add.layer': LayerLike
  'canvas.drag.over': DragEvent
  'canvas.drag.leave': DragEvent
  'canvas.drop.image': DragEvent

  'layer.create.image': string
  'layer.create.text': TextForm

  'toolbar.select.image': void
  'toolbar.select.text': void
  'toolbar.select.fill': void
  'toolbar.selected': LayerType

  'context.open': ContextOpenEvent
  'context.close': ContextCloseEvent

  'window.resize': number
}

interface Size {
  w: number
  h: number
}

interface SizeConstraints {
  exact?: number
  ideal: number
  max?: number
  min?: number
}

interface CanvasSize {
  current: Size
  ideal: number
}

interface UseCase<I, O> {
  execute(input: I): O | Promise<O>
}
