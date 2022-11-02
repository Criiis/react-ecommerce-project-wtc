import { createSlice } from '@reduxjs/toolkit'

const cartState = {
  products: [],
  totalAmount: 0,
  cartPopUpController: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    addToCart(state, action) {
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

    removeFromCart(state, action) {
      const productId = action.payload
      const existingItemIndex = state.products.find(
        (product) => product.id === productId
      )

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
