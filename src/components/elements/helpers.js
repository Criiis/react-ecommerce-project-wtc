/**
 *
 * @param {*} value should be a number
 * @returns return the number as currency
 */
export const transformToCurrency = (value) => {
  const valueToNumber = typeof value === 'string' ? +value.trim() : +value

  if (isNaN(valueToNumber))
    return console.warn(
      `Something is wrong with ur transformToCurrency value ${valueToNumber}.`
    )

  return new Intl.NumberFormat('default', {
    style: 'currency',
    currency: 'GBP',
  }).format(valueToNumber)
}
