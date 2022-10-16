import { useState } from 'react'
import Header from './components/elements/header/Header'
import Plp from './components/elements/PLP/Plp'
import Wishlist from './components/elements/wishlist/Wishlist'
import CartProvider from './components/storage/CartProvider'
import WishlistProvider from './components/storage/wishlistProvider'

function App() {
  const [wishlistController, setWishlistController] = useState(false)

  const wishlistHandlerFunction = () => {
    setWishlistController(!wishlistController)
  }

  return (
    <CartProvider>
      <WishlistProvider>
        <Header wishlistHandler={wishlistHandlerFunction} />
        <Plp />
        {wishlistController && (
          <Wishlist wishlistHandler={wishlistHandlerFunction} />
        )}
      </WishlistProvider>
      {/* {wishlistController && <Wishlist />} */}
    </CartProvider>
  )
}

export default App
