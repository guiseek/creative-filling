type CustomProperty = `--cf-primary-rgb` | `--cf-onprimary-rgb` | `--cf-surface-rgb` | `--cf-onsurface-rgb`

export const getCustomProperty = (property: CustomProperty) => {
  return getComputedStyle(document.documentElement).getPropertyValue(property)

}