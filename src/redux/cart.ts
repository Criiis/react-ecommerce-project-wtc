import { createSlice } from '@reduxjs/toolkit'
import { cartReducer, product } from '../state.d'

const cartState: cartReducer = {
  products: [],
  totalAmount: 0,
  cartPopUpController: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    addToCart(
      state,
      action: {
        payload: { product: product; quantity: number }
        type: string
      }
    ) {
      const newItem = action.payload.product
      const existingItemIndex = state.products.find(
        (product) => product.id === newItem.id
      )
      state.totalAmount = state.totalAmount + newItem.price

      if (!existingItemIndex)
        state.products.push({
          ...newItem,
          quantity: action.payload.quantity,
        })
      else
        existingItemIndex.quantity =
          existingItemIndex.quantity + action.payload.quantity
    },

    removeFromCart(
      state,
      action: {
        payload: number
        type: string
      }
    ) {
      const productId = action.payload
      const existingItemIndex = state.products.find(
        (product) => product.id === productId
      )

      if (!existingItemIndex) return

      state.totalAmount = state.totalAmount - existingItemIndex.price

      if (existingItemIndex.quantity === 1)
        state.products = state.products.filter(
          (product) => product.id !== productId
        )
      else existingItemIndex.quantity = existingItemIndex.quantity - 1

      if (state.products.length === 0) state.totalAmount = 0
    },

    clearCart(state) {
      state.products = []
      state.totalAmount = 0
    },

    cartUiController(state) {
      state.cartPopUpController = !state.cartPopUpController
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
