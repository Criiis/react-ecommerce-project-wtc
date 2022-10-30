import { createSlice } from '@reduxjs/toolkit'

const wishlistState = { products: [] }

const wishlistSlice = createSlice({
  name: 'wishlist',
  wishlistState,
  reducers: {
    addToWishlist(state, action) {},
    removeFromWishlist(state, action) {},
  },
})

export const wishlistAction = wishlistSlice.actions
export default wishlistSlice.reducer
