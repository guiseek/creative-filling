import {async} from '../async'

export const loadImage = (image: File | Blob) => {
  return async<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.addEventListener('error', () => {
      const message = `Error on load image of type`
      reject(new DOMException(`${message}: ${image.type}`))
    })
    
    reader.addEventListener('loadend', () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      }
    })

    reader.readAsDataURL(image)
  })
}
