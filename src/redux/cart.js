import { createSlice } from '@reduxjs/toolkit'

const cartState = {
  products: [],
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  cartState,
  reducers: {
    addToCart(state, action) {},
    removeFromCart(state, action) {},
    clearCart(state) {},
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducers
