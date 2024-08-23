import {asyncAll} from '../async'

export const loadFont = async (family: string, weights: number[]) => {
  const fonts = weights.map(String).map((weight) => {
    const url = `url(./fonts/${family}-${weight}.woff2)`
    return new FontFace(family, url, {weight, style: 'normal'}).load()
  })

  return (await asyncAll(fonts)).map((font) => document.fonts.add(font))
}
