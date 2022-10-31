import { createSlice } from '@reduxjs/toolkit'

const wishlistState = { products: [] }

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: wishlistState,
  reducers: {
    addToWishlist(state, action) {
      console.log(state, action)

      // if (!stateProducts.includes(action.payload)) state.push(action.payload)
    },
    removeFromWishlist(state, action) {
      console.log(state, action)
      // const indexOfProduct = state.findIndex((el) => el.id === action.payload)

      // if (indexOfProduct === -1) return { wishlistProducts: stateProducts }

      // state.splice(indexOfProduct, 1)
      // return { wishlistProducts: stateProducts }
    },
  },
})

export const wishlistAction = wishlistSlice.actions
export default wishlistSlice.reducer
