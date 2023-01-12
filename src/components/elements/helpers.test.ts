import { transformToCurrency } from './helpers'

const currencyValueTest = '£200.00'
describe('transformToCurrency, transform number or string to a currency', () => {
  test('string to a currency', () => {
    const currencyWithString = transformToCurrency('200')
    expect(currencyWithString).toBe(currencyValueTest)
  })

  test('number to a currency', () => {
    const currencyWithNumber = transformToCurrency(200)
    expect(currencyWithNumber).toBe(currencyValueTest)
  })

  test('failt to a currency', () => {
    const currencyFail = transformToCurrency('A12')
    expect(currencyFail).toBe('something went wrong')
  })
})
