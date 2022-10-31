import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import wishlistReducer from './wishlist'

const store = configureStore({
  reducer: {
    cartReducer,
    wishlistReducer,
  },
})

export default store
