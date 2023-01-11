import { useDispatch, useSelector } from 'react-redux'
import Header from './components/elements/header/Header'
import { wishlistAction } from './redux/wishlist'
import { cartActions } from './redux/cart'
import Cart from './components/elements/cart/Cart'
import Plp from './components/elements/PLP/Plp'
import Wishlist from './components/elements/wishlist/Wishlist'
import './main.css'
import Footer from './components/elements/footer/Footer'
import { AppDispatch, RootState } from './redux'

function App() {
  const dispatch: AppDispatch = useDispatch()
  const wishlistController = useSelector(
    ({ wishlistReducer }: RootState) => wishlistReducer.wishlistPopUpController
  )

  const cartController = useSelector(
    ({ cartReducer }: RootState) => cartReducer.cartPopUpController
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
