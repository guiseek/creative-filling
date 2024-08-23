import {Vector2} from '@shared/utils'

export abstract class Layer extends OffscreenCanvas {
  protected context: OffscreenCanvasRenderingContext2D | null

  protected _position = new Vector2()

  protected _offset = new Vector2()

  protected _draggable = true

  protected _resizable = true

  protected _dragging = false

  protected _resizing = false

  protected _aspectRatio: number

  protected _resizeDirection = {x: false, y: false}

  protected _hovered = false

  protected _active = true

  protected _order = 1

  get position() {
    return this._position
  }

  get dragging() {
    return this._dragging
  }

  get resizing() {
    return this._resizing
  }

  get resizable() {
    return this._resizable
  }

  get hovered() {
    return this._hovered
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
    this._aspectRatio = w / h
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

  setHovered(value: boolean) {
    this._hovered = value
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

  setResizable(resizable: boolean) {
    this._resizable = resizable
    return this
  }

  protected setResizing(resizing: boolean) {
    this._resizing = resizing
    return this
  }

  startResize(direction: Vector2Direction) {
    this.setResizing(true)
    this._resizeDirection = direction
  }

  resizeTo(point: Vector2) {
    if (this._resizing) {
      const {x, y} = this._resizeDirection

      if (x && y) {
        const dx = point.x - this.position.x
        const dy = point.y - this.position.y
        const scale = Math.max(dx / this.width, dy / this.height)

        this.width = this.width * scale
        this.height = this.height * scale
      } else if (x) {
        this.width = Math.max(10, point.x - this.position.x)
        this.height = this.width / this._aspectRatio
      } else if (y) {
        this.height = Math.max(10, point.y - this.position.y)
        this.width = this.height * this._aspectRatio
      }

      this.render()
    }
  }

  stopResize() {
    this.setResizing(false)
    this._resizeDirection = {x: false, y: false}
  }
}
