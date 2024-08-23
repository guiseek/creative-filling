export function throttle<T extends Event>(
  callback: (event: T) => void,
  delay = 1000
) {
  let previousCall = new Date().getTime()
  let lastEvent: T
  let timeoutId: number | undefined

  return (event: T) => {
    const time = new Date().getTime()
    lastEvent = event

    if (time - previousCall >= delay) {
      previousCall = time
      callback(event)
    } else {
      clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
        previousCall = new Date().getTime()
        callback(lastEvent)
      }, delay - (time - previousCall))
    }
  }
}
