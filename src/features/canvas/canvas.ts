import {getCustomProperty, Vector2} from '@shared/utils'
import {builtIn} from '@websqnl/elements/shared'
import {contextOpen} from '@features/context'
import {dispatch} from '@websqnl/event-flow'

@builtIn('canvas', 'cf-canvas')
class Canvas extends HTMLCanvasElement implements CanvasLike {
  context: CanvasRenderingContext2D | null

  #layers: LayerLike[] = []
  #activeLayer: LayerLike | null = null

  #isContextMenu = false

  constructor() {
    super()
    this.context = this.getContext('2d')
  }

  addLayer(layer: LayerLike) {
    layer.setOrder(this.#layers.length + 1)
    this.#layers.push(layer)
  }

  removeLayer(layer: LayerLike) {
    const index = this.#layers.findIndex((l) => l.id === layer.id)
    this.#layers.splice(index, 1)
    this.render().then()
  }

  connectedCallback() {
    this.oncontextmenu = this.#onContextMenu
    this.onmousedown = this.#handleMouseDown
    this.onmousemove = this.#handleMouseMove
    this.onmouseup = this.#handleMouseUp
  }

  async render() {
    if (!this.context) return

    this.context.clearRect(0, 0, this.width, this.height)

    const layers = this.#layers
      .filter((layer) => layer.active)
      .sort((a, b) => a.order - b.order)

    for (const layer of layers) {
      await layer.render()
      this.#drawLayer(layer)
    }
  }

  setSize(size: number) {
    this.width = size
    this.height = size
  }

  setIsContextMenu(isContextMenu: boolean) {
    this.#isContextMenu = isContextMenu
  }

  #onContextMenu = (e: MouseEvent) => {
    this.setIsContextMenu(true)

    e.preventDefault()

    const {offsetX, offsetY} = e
    const position = new Vector2(offsetX, offsetY)
    const collidingLayers = this.#getCollidingLayers(position)

    if (collidingLayers.length > 0) {
      const layer = this.#getTopLayer(collidingLayers)
      const position = {x: e.pageX, y: e.pageY}
      dispatch(contextOpen({layer, position}))
    }
    // dispatch(contextOpen({x: offsetX, y: offsetY}))
  }

  #handleMouseDown = ({offsetX, offsetY}: MouseEvent) => {
    setTimeout(() => {
      if (this.#isContextMenu) return

      const position = new Vector2(offsetX, offsetY)
      const collidingLayers = this.#getCollidingLayers(position)

      if (collidingLayers.length > 0) {
        const topLayer = this.#getTopLayer(collidingLayers)
        const resizeDirection = this.#getResizeDirection(topLayer, position)

        this.#activeLayer = topLayer

        if (resizeDirection.x || resizeDirection.y) {
          topLayer.startResize(resizeDirection)
        } else {
          topLayer.startDrag(position)
        }
      }
    })
  }

  #handleMouseMove = (event: MouseEvent) => {
    const {offsetX, offsetY} = event
    const position = new Vector2(offsetX, offsetY)

    if (this.#activeLayer) {
      this.#updateLayerPositionOrSize(position)
    } else {
      this.#updateHoveredLayer(position)
    }

    this.render()
  }

  #handleMouseUp = () => {
    if (this.#activeLayer) {
      this.#activeLayer.resizing
        ? this.#activeLayer.stopResize()
        : this.#activeLayer.stopDrag()

      this.#activeLayer = null
      this.render()
    }
  }

  #getCollidingLayers(position: Vector2) {
    return this.#layers.filter((layer) => position.isCollision(layer.rect))
  }

  #getTopLayer(layers: LayerLike[]) {
    return layers.reduce((topLayer, currentLayer) =>
      currentLayer.order > topLayer.order ? currentLayer : topLayer
    )
  }

  #getResizeDirection(layer: LayerLike, position: Vector2) {
    const cornerSize = 10
    const rect = layer.rect

    return {
      x: position.x >= rect.x + rect.w - cornerSize,
      y: position.y >= rect.y + rect.h - cornerSize,
    }
  }

  #updateLayerPositionOrSize(position: Vector2) {
    if (this.#activeLayer) {
      if (this.#activeLayer.resizing) {
        this.#activeLayer.resizeTo(position)
      } else if (this.#activeLayer.dragging) {
        this.#activeLayer.dragTo(position)
      }
    }
  }

  #updateHoveredLayer(position: Vector2) {
    let cursorStyle = 'default'

    for (const layer of this.#layers) {
      if (layer.resizable && position.isCollision(layer.rect)) {
        const resizeDirection = this.#getResizeDirection(layer, position)

        if (resizeDirection.x || resizeDirection.y) {
          cursorStyle =
            resizeDirection.x && resizeDirection.y
              ? 'nwse-resize'
              : resizeDirection.x
              ? 'ew-resize'
              : 'ns-resize'
        }

        layer.setHovered(true)
      } else {
        layer.setHovered(false)
      }
    }

    this.style.cursor = cursorStyle
  }

  #drawLayer(layer: LayerLike) {
    const {width, height} = layer
    const {x, y} = layer.position
    this.context?.drawImage(layer, x, y, width, height)

    if (layer.hovered) {
      this.#drawLayerBorder(x, y, width, height)
    }
  }

  #drawLayerBorder(x: number, y: number, width: number, height: number) {
    const path = new Path2D()
    path.rect(x, y, width, height)

    this.context!.lineWidth = 2

    const style = `rgba(${getCustomProperty('--cf-primary-rgb')}, 0.4)`
    this.context!.strokeStyle = style

    this.context!.stroke(path)
  }
}

export const canvas = new Canvas()
