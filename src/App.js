import Header from './components/elements/header/Header'
import Plp from './components/elements/PLP/Plp'
import CartProvider from './components/storage/CartProvider'
import WishlistProvider from './components/storage/wishlistProvider'

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Header />
        <Plp />
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
