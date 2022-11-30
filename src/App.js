import { useDispatch, useSelector } from 'react-redux'
import { wishlistAction } from './redux/wishlist'
import { cartActions } from './redux/cart'
import Cart from './components/elements/cart/Cart'
import Header from './components/elements/header/Header'
import Plp from './components/elements/PLP/Plp'
import Wishlist from './components/elements/wishlist/Wishlist'
import './App.css'
import Footer from './components/elements/footer/Footer'

function App() {
  const dispatch = useDispatch()
  const wishlistController = useSelector(
    (state) => state.wishlistReducer.wishlistPopUpController
  )

  const cartController = useSelector(
    (state) => state.cartReducer.cartPopUpController
  )

  const wishlistHandlerFunction = () => {
    dispatch(wishlistAction.wishlistUiController())
  }

  const cartHandlerFunction = () => {
    dispatch(cartActions.cartUiController())
  }

  return (
    <>
      <Header
        wishlistHandler={wishlistHandlerFunction}
        cartHandler={cartHandlerFunction}
      />
      <Plp />
      {wishlistController && (
        <Wishlist wishlistHandler={wishlistHandlerFunction} />
      )}
      {cartController && <Cart cartHandler={cartHandlerFunction} />}
      <Footer />
    </>
  )
}

export default App
