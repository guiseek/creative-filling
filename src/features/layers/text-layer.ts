import {Layer} from './layer'

export class TextLayer extends Layer {
  type: LayerType = 'text'

  protected _text = ''

  protected _color = '#111111'

  protected _font = 'Mukta'

  protected _size = 3.2

  protected _weight: TextWeight = 'normal'

  async render() {
    if (!this.context?.drawImage) return

    this.context.clearRect(0, 0, this.width, this.height)

    this.context.fillStyle = this._color
    this.context.font = this.font

    const y = this._size * 10

    this.context.fillText(this._text, 0, y, this.width)
  }

  setText(text: string) {
    this._text = text
    return this
  }

  setColor(color: string) {
    this._color = color
    return this
  }

  setFont(font: string) {
    this._font = font
    return this
  }

  setSize(size: number) {
    this._size = size
    return this
  }

  setWeight(weight: TextWeight) {
    this._weight = weight
    return this
  }

  private get font() {
    return `${this._weight} ${this._size}em ${this._font}`
  }
}
