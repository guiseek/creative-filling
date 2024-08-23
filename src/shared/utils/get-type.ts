export const getType = (value: unknown): TypeValue => {
  if (typeof value === 'boolean') {
    return 'boolean'
  } else if (typeof value === 'number') {
    return 'number'
  } else if (typeof value === 'string') {
    if (!isNaN(Number(value)) && value.trim() !== '') {
      return 'number'
    }

    const parsedDate = new Date(value)
    const isValidDate = !isNaN(parsedDate.getTime())

    const datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$|^\d{4}-\d{2}-\d{2}$/
    if (isValidDate && datePattern.test(value)) {
      return 'date'
    }

    return 'string'
  } else if (value instanceof Date && !isNaN(value.getTime())) {
    return 'date'
  } else {
    throw new Error('Unsupported type')
  }
}
