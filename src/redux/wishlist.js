import { createSlice } from '@reduxjs/toolkit'

const wishlistState = { products: [], wishlistPopUpController: false }

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: wishlistState,
  reducers: {
    addToWishlist(state, action) {
      const newItem = action.payload
      const existingItemIndex = state.products.find(
        (item) => item.id === newItem.id
      )

      if (!existingItemIndex) state.products.push(newItem)
    },
    removeFromWishlist(state, action) {
      const productId = action.payload
      const existingItemIndex = state.products.find(
        (product) => product.id === productId
      )

      if (existingItemIndex)
        state.products = state.products.filter(
          (product) => product.id !== productId
        )
    },
    wishlistUiController(state) {
      state.wishlistPopUpController = !state.wishlistPopUpController
    },
  },
})

export const wishlistAction = wishlistSlice.actions
export default wishlistSlice.reducer
