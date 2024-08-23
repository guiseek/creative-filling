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
      .map((layer) => {
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

      this.#layer = layer
      layer.startDrag(position)
    }
  }

  #onMouseMove = (event: MouseEvent) => {
    if (this.#layer) {
      const {offsetX, offsetY} = event
      const newPosition = new Vector2(offsetX, offsetY)
      this.#layer.dragTo(newPosition)
      this.render()
    }
  }

  #onMouseUp = () => {
    if (this.#layer) {
      this.#layer.stopDrag()
      this.#layer = null
      this.render()
    }
  }
}

export const canvas = new Canvas()
