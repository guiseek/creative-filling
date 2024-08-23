import {Layer} from './layer'

export class ImageLayer extends Layer {
  image = new Image(this.width, this.height)

  async render() {
    if (!this.context?.drawImage) return

    this.context.clearRect(0, 0, this.width, this.height)

    await this.image.decode()
    const {w, h} = this.rect
    this.context.drawImage(this.image, 0, 0, w, h)
  }

  setSrc(src: string) {
    this.image.src = src
    return this
  }
}
