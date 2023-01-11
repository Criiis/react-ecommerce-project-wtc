/**
 *
 * @param {*} value should be a number
 * @returns return the number as currency
 */
export const transformToCurrency = (value: string | number) => {
  const valueToNumber = typeof value === 'string' ? +value.trim() : +value

  if (isNaN(valueToNumber)) return 'something went wrong'

  return new Intl.NumberFormat('default', {
    style: 'currency',
    currency: 'GBP',
  }).format(valueToNumber)
}
