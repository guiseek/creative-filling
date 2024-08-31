import {async} from './async'

type KnownMimeType =
  | 'image/png'
  | 'image/svg+xml'
  | 'image/jpeg'
  | 'image/gif'
  | 'image/webp'
  | 'application/pdf'
  | 'application/zip'

export const getMimeType = (file: File | Blob) => {
  return async<KnownMimeType | null>((resolve, reject) => {
    const bytes = file.slice(0, 4)
    const reader = new FileReader()

    reader.addEventListener('error', () => {
      const message = `Error on load file of type`
      reject(new DOMException(`${message}: ${file.type}`))
    })

    reader.addEventListener('load', () => {
      if (reader.result instanceof ArrayBuffer) {
        const view = new DataView(reader.result)
        const magic = view.getUint32(0, false)

        switch (magic) {
          case 0x89504e47:
            return resolve('image/png')
          case 0x3c737667:
            return resolve('image/svg+xml')
          case 0xffd8ffe0:
            return resolve('image/jpeg')
          case 0x47494638:
            return resolve('image/gif')
          case 0x52494646:
            return resolve('image/webp')
          case 0x25504446:
            return resolve('application/pdf')
          case 0x504b0304:
            return resolve('application/zip')
          default:
            return resolve(null)
        }
      }
    })

    reader.readAsArrayBuffer(bytes)
  })
}
