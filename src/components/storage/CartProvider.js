import { useReducer } from 'react'
import CartContext from './CartContext'

const cartDefaultState = {
  products: [],
  totalAmount: 0,
}

const ADDCART = 'ADD_TO_CART'
const REMOVECART = 'REMOVE_FROM_CAR'
const CLEARCART = 'CLEAR_CART'

function cartReducer(state, action) {
  console.log(state, action)
  return state
}

export default function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, cartDefaultState)

  const addToCartHandler = (item, quantity) => {
    dispatchCart({ type: ADDCART, payload: { item, quantity } })
  }
  const removeFromCartHandler = (id) => {
    dispatchCart({ type: REMOVECART, payload: id })
  }
  const clearCartHandler = () => {
    dispatchCart({ type: CLEARCART })
  }

  const cartContext = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addProductToCart: addToCartHandler,
    removeProductFromCart: removeFromCartHandler,
    clearProductsFromCart: clearCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
