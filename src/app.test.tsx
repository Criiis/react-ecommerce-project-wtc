import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
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

    // click in the wishlist icon and open wishlist pop-up
    const wishlistButton = screen.getByRole('button', {
      name: /open wishlist/i,
    })
    expect(wishlistButton).toBeInTheDocument()
    await user.click(wishlistButton)

    // check if the wishlist popup exist in the page
    const wishlistHeading = screen.getByRole('heading', {
      name: /Wishlist/,
    })
    expect(wishlistHeading).toBeInTheDocument()

    // button

    // click add to cart
    // check if product has been added to cart

    // click in the cart icon and open cart pop-up
    // click clear all
  })
})
