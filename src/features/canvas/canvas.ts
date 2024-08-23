import {builtIn} from '@websqnl/elements/shared'
import {Layer} from '@features/layers'
import {Vector2} from '@shared/utils'

@builtIn('canvas', 'cf-canvas')
class Canvas extends HTMLCanvasElement {
  context: CanvasRenderingContext2D | null

  #layers: Layer[] = []

  #layer: Layer | null = null

  constructor() {
    super()
    this.context = this.getContext('2d')
  }

  addLayer = (layer: Layer) => {
    layer.setOrder(this.#layers.length)
    this.#layers.push(layer)
  }

  connectedCallback() {
    this.onmousedown = this.#onMouseDown
    this.onmousemove = this.#onMouseMove
    this.onmouseup = this.#onMouseUp
  }

  render = async () => {
    if (!this.context) return

    this.context.clearRect(0, 0, this.width, this.height)

    this.#layers
      .filter((layer) => layer.active)
      .sort((a, b) => a.order - b.order)
      .map(async (layer) => {
        await layer.render()
        const {width, height} = layer
        const {x, y} = layer.position
        this.context?.drawImage(layer, x, y, width, height)
      })
  }

  setSize = (size: number) => {
    this.width = size
    this.height = size
  }

  #onMouseDown = ({offsetX, offsetY}: MouseEvent) => {
    const position = new Vector2(offsetX, offsetY)

    const colliders = this.#layers.filter(({rect}) =>
      position.isCollision(rect)
    )

    if (colliders.length > 0) {
      const layer = colliders.reduce((highest, current) => {
        return current.order > highest.order ? current : highest
      }, colliders[0])

      const direction = this.#getResizeDirection(layer, position)

      if (direction.x || direction.y) {
        this.#layer = layer
        layer.startResize(direction)
      } else {
        this.#layer = layer
        layer.startDrag(position)
      }
    }
  }

  #onMouseMove = (event: MouseEvent) => {
    const {offsetX, offsetY} = event
    const position = new Vector2(offsetX, offsetY)

    if (this.#layer && this.#layer.dragging) {
      this.#layer.dragTo(position)
      this.render()
    } else if (this.#layer && this.#layer.resizing) {
      this.#layer.resizeTo(position)
      this.render()
    } else {
      const colliders = this.#layers.filter(({rect}) =>
        position.isCollision(rect)
      )

      const hoveredLayer = colliders.reduce((highest, current) => {
        return current.order > highest.order ? current : highest
      }, colliders[0])

      if (hoveredLayer) {
        const direction = this.#getResizeDirection(hoveredLayer, position)

        if (direction.x || direction.y) {
          this.style.cursor =
            direction.x && direction.y
              ? 'nwse-resize'
              : direction.x
              ? 'ew-resize'
              : 'ns-resize'
        } else {
          this.style.cursor = 'default'
        }
      } else {
        this.style.cursor = 'default'
      }
    }
  }

  #getResizeDirection(layer: Layer, position: Vector2) {
    const cornerSize = 10
    const rect = layer.rect

    return {
      x: position.x >= rect.x + rect.w - cornerSize,
      y: position.y >= rect.y + rect.h - cornerSize,
    }
  }

  #onMouseUp = () => {
    if (this.#layer) {
      if (this.#layer.resizing) {
        this.#layer.stopResize()
      } else {
        this.#layer.stopDrag()
      }
      this.#layer = null
      this.render().then()
    }
  }
}

export const canvas = new Canvas()
