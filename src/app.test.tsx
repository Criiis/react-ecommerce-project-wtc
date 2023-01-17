import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/index'
import userEvent from '@testing-library/user-event'

describe('Test full app', () => {
  test('testing wishlist functionality', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const user = userEvent.setup()

    // click in the product to add to the wishlist
    const listOfWishlistButtons = await screen.findAllByRole('button', {
      name: /Click to add to wishlist/,
    })
    expect(listOfWishlistButtons[0]).toBeInTheDocument()
    await user.click(listOfWishlistButtons[0])

    //check if product was added
    expect(listOfWishlistButtons[0]).toHaveAttribute(
      'aria-label',
      'Product added to wishlist click to remove from wishlist'
    )

    // click in the wishlist icon and open wishlist pop-up
    const wishlistButton = screen.getByRole('button', {
      name: /open wishlist section/i,
    })
    expect(wishlistButton).toBeInTheDocument()
    expect(wishlistButton).toHaveAttribute('role', 'button')
    expect(wishlistButton).toHaveAttribute(
      'aria-label',
      'open wishlist section'
    )
    await user.click(wishlistButton)

    // check if the wishlist popup exist in the page
    const wishlistHeading = screen.getByRole('heading', {
      name: /Wishlist/,
    })
    expect(wishlistHeading).toBeInTheDocument()

    //close the popup
    const backgroundButton = screen.getByRole('button', {
      name: /click to close the section/i,
    })
    expect(backgroundButton).toBeInTheDocument()
    await user.click(backgroundButton)
  })

  test('testing cart functionality', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const user = userEvent.setup()

    // click in the product to add to the cart
    const listOfCartButtons = await screen.findAllByRole('button', {
      name: /Add to cart/,
    })
    expect(listOfCartButtons[1]).toBeInTheDocument()
    await user.click(listOfCartButtons[1])

    // check if product was added
    expect(listOfCartButtons[1]).toHaveTextContent('Product added')

    // click in the Cart icon and open Cart pop-up
    const cartButton = screen.getByRole('button', {
      name: /open cart section/i,
    })
    expect(cartButton).toBeInTheDocument()
    expect(cartButton).toHaveAttribute('role', 'button')
    expect(cartButton).toHaveAttribute('aria-label', 'open cart section')
    await user.click(cartButton)

    // check if the Cart popup exist in the page
    const CartHeading = screen.getByRole('heading', {
      name: /Cart/,
    })
    expect(CartHeading).toBeInTheDocument()

    //close the popup
    const backgroundButton = screen.getByRole('button', {
      name: /click to close the section/i,
    })
    expect(backgroundButton).toBeInTheDocument()
    await user.click(backgroundButton)
  })
})
// https://dev.to/believer/testing-react-createportal-with-testing-library-1mj6
