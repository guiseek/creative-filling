/// <reference types="vite/client" />

declare const root: HTMLDivElement

interface Vector2Like {
  x: number
  y: number
}

interface RectLike {
  x: number
  y: number
  w: number
  h: number
}

type ToolbarAction = 'image' | 'text'

type TextWeight = 'bold' | 'normal'

interface TextForm {
  text: string
  size: number
  bold: boolean
}

interface StateEventMap {
  'form.text.submit': TextForm

  'canvas.render.request': void
  'canvas.update.size': CanvasSize
  'canvas.add.layer': Layer

  'layer.create.image': string
  'layer.create.text': TextForm

  'toolbar.select.image': void
  'toolbar.select.text': void
  'toolbar.selected': ToolbarAction
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
