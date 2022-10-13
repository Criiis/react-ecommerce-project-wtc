import Header from './components/elements/header/Header'
import Plp from './components/elements/PLP/Plp'
import WishlistProvider from './components/storage/wishlistProvider'

function App() {
  return (
    <WishlistProvider>
      <Header />
      <Plp />
    </WishlistProvider>
  )
}

export default App
