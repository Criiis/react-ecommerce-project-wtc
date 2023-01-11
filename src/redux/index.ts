import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import wishlistReducer from './wishlist'

const store = configureStore({
  reducer: {
    cartReducer,
    wishlistReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
