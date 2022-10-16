import { useState } from 'react'
import Cart from './components/elements/cart/Cart'
import Header from './components/elements/header/Header'
import Plp from './components/elements/PLP/Plp'
import Wishlist from './components/elements/wishlist/Wishlist'
import CartProvider from './components/storage/CartProvider'
import WishlistProvider from './components/storage/wishlistProvider'

function App() {
  const [wishlistController, setWishlistController] = useState(false)
  const [cartController, setCartController] = useState(false)

  const wishlistHandlerFunction = () => {
    setWishlistController(!wishlistController)
  }

  const cartHandlerFunction = () => {
    setCartController(!cartController)
  }

  return (
    <CartProvider>
      <WishlistProvider>
        <Header
          wishlistHandler={wishlistHandlerFunction}
          cartHandler={cartHandlerFunction}
        />
        <Plp />
        {wishlistController && (
          <Wishlist wishlistHandler={wishlistHandlerFunction} />
        )}
      </WishlistProvider>
      {cartController && <Cart cartHandler={cartHandlerFunction} />}
    </CartProvider>
  )
}

export default App
