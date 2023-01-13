import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/index'

it('renders welcome message', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // click add to cart
  // check if product has been added to cart

  // click in the cart icon and open cart pop-up
  // click clear all




  // click add to wishlist
  // check if product has been added to wishlist

  // click in the wishlist icon and open wishlist pop-up
  


})
