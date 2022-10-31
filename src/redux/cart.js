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
    addToCart(state, action) {},
    removeFromCart(state, action) {},
    clearCart(state) {},

    cartUiController(state) {
      state.cartPopUpController = !state.cartPopUpController
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
