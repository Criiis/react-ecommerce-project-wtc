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
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case ADDCART: {
      const stateProducts = state.products //current state product
      const statePrice = state.totalAmount //current price in state
      const productState = action.payload.item //product added
      const productPrice = productState.price //product price
      const updateTotalPrice = statePrice + productPrice //total price update
      let updateProduct = []

      const indexOfProduct = stateProducts.findIndex(
        (el) => el.id === productState.id
      )

      if (indexOfProduct === -1) {
        updateProduct = [
          ...stateProducts,
          { ...productState, quantity: action.payload.quantity },
        ]
      } else {
        stateProducts[indexOfProduct].quantity =
          stateProducts[indexOfProduct].quantity + action.payload.quantity
        updateProduct = [...stateProducts]
      }

      console.log(updateProduct)
      return { products: updateProduct, totalAmount: updateTotalPrice }
    }
    case REMOVECART: {
      const stateProducts = state.products //current state product
      const statePrice = state.totalAmount //current price in state
      const productState = action.payload.item //product added
      const productPrice = productState.price //product price
      const updateTotalPrice = statePrice - productPrice //total price update

      console.log(REMOVECART)
      return { products: stateProducts, totalAmount: updateTotalPrice }
    }
    case CLEARCART: {
      console.log(CLEARCART)
      return state
    }
    default:
      return state
  }
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
