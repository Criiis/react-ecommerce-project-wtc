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

      //if doesn't exist add first 1
      if (indexOfProduct === -1) {
        updateProduct = [
          ...stateProducts,
          { ...productState, quantity: action.payload.quantity },
        ]
      } else {
        console.log(stateProducts[indexOfProduct].quantity)
        console.log(action.payload.quantity)

        stateProducts[indexOfProduct].quantity =
          stateProducts[indexOfProduct].quantity + action.payload.quantity
        updateProduct = [...stateProducts]
      }

      return { products: updateProduct, totalAmount: updateTotalPrice }
    }
    case REMOVECART: {
      const stateProducts = state.products //current state product
      const statePrice = state.totalAmount //current price in state

      const payloadId = action.payload //product added
      const indexOfProduct = stateProducts.findIndex(
        (el) => el.id === payloadId
      )

      //if for some reason product doesn't exist return normal state
      if (indexOfProduct === -1)
        return { products: stateProducts, totalAmount: statePrice }

      const currentProduct = stateProducts[indexOfProduct]

      //if quantity of the product is 1 meaning u will remove the item completely from cart
      if (currentProduct.quantity === 1) stateProducts.splice(indexOfProduct, 1)
      else
        stateProducts[indexOfProduct].quantity =
          stateProducts[indexOfProduct].quantity - 1

      console.log(stateProducts)
      //update price
      const updateTotalPrice =
        stateProducts.length === 0 ? 0 : statePrice - currentProduct.price

      return { products: stateProducts, totalAmount: updateTotalPrice }
    }
    case CLEARCART: {
      return { products: [], totalAmount: 0 }
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
