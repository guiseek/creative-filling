export const values = <T extends object, K extends keyof T>(value: T) => {
  return Object.values(value) as T[K][]
}
