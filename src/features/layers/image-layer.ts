import {Layer} from './layer'

export class ImageLayer extends Layer {
  image = new Image(this.width, this.height)

  async render() {
    if (!this.context?.drawImage) return

    await this.image.decode()
    const {x, y, w, h} = this.rect
    this.context.drawImage(this.image, x, y, w, h)
  }

  setSrc(src: string) {
    this.image.src = src
    return this
  }
}
