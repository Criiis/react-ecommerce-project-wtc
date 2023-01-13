import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Plp from './Plp'

import { Provider } from 'react-redux'
import store from '../../../redux/index'

// Create a new variable and type it as jest.Mock passing the type
// const mockedUseFooContext = fetch as jest.Mock<FooContext>;

describe('render PLP', () => {
  test('render products in plp', async () => {
    render(
      <Provider store={store}>
        <Plp />
      </Provider>
    )

    // const listItemElement = await screen.findAllByText('Product 1')
    const productImages: HTMLImageElement[] = await screen.findAllByRole(
      'img',
      {
        name: /Product/,
      }
    )
    expect(productImages).toHaveLength(2)

    const productAlt: string[] = productImages.map(
      (image: HTMLImageElement) => image.alt
    )
    expect(productAlt).toEqual(['Product 1', 'Product 2'])
  })
})
