export const transformToCurrency = (value) => {
  const valueToNumber = typeof value === 'string' ? +value.trim() : +value

  if (isNaN(valueToNumber))
    return console.warn(
      `Something is worng with ur transformToCurrency value ${valueToNumber}.`
    )

  return new Intl.NumberFormat('default', {
    style: 'currency',
    currency: 'GBP',
  }).format(valueToNumber)
}
