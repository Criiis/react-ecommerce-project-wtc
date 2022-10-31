import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './components/elements/cart/Cart'
import Header from './components/elements/header/Header'
import Plp from './components/elements/PLP/Plp'
import Wishlist from './components/elements/wishlist/Wishlist'
import CartProvider from './components/storage/CartProvider'
import { wishlistAction } from './redux/wishlist'

function App() {
  // wishlistUiController
  const dispatch = useDispatch()
  const wishlistController = useSelector(
    (state) => state.wishlistReducer.wishlistPopUpController
  )

  const [cartController, setCartController] = useState(false)

  const wishlistHandlerFunction = () => {
    dispatch(wishlistAction.wishlistUiController())
  }

  const cartHandlerFunction = () => {
    setCartController(!cartController)
  }

  return (
    <CartProvider>
      <Header
        wishlistHandler={wishlistHandlerFunction}
        cartHandler={cartHandlerFunction}
      />
      <Plp />
      {wishlistController && (
        <Wishlist wishlistHandler={wishlistHandlerFunction} />
      )}
      {cartController && <Cart cartHandler={cartHandlerFunction} />}
    </CartProvider>
  )
}

export default App
