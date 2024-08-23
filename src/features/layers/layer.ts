import {Vector2} from '@shared/utils'

export abstract class Layer extends OffscreenCanvas {
  protected context: OffscreenCanvasRenderingContext2D | null

  protected _position = new Vector2()

  protected _offset = new Vector2()

  protected _draggable = true

  protected _dragging = false

  protected _active = true

  protected _order = 1

  get position() {
    return this._position
  }

  get dragging() {
    return this._dragging
  }

  get offset() {
    return this._offset
  }

  get active() {
    return this._active
  }

  get order() {
    return this._order
  }

  get rect() {
    return {
      x: this.position.x,
      y: this.position.y,
      w: this.width,
      h: this.height,
    }
  }

  constructor(w: number, h: number, x = 0, y = 0) {
    super(w, h)
    this._position = new Vector2(x, y)
    this.context = this.getContext('2d')
  }


  abstract render(): Promise<void>

  setActive(value: boolean) {
    this._active = value
    return this
  }

  setOrder(value: number) {
    this._order = value
    return this
  }

  setDraggable(value: boolean) {
    this._draggable = value
    return this
  }

  protected setDragging(value: boolean) {
    this._dragging = value
    return this
  }

  startDrag(start: Vector2) {
    this.setDragging(true)
    this.offset.copy(start).sub(this.position)
  }

  dragTo(point: Vector2) {
    if (this.dragging) {
      this.position.copy(point).sub(this.offset)
    }
  }

  stopDrag() {
    this.setDragging(false)
  }
}
