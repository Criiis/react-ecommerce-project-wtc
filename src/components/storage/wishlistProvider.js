import { useReducer } from 'react'
import WishlistContext from './WishlistContext'

const stateDefaultValue = {
  wishlistProducts: [],
}

const ADDWISHLIST = 'ADD_TO_WISHLIST'
const REMOVEWISHLIST = 'REMOVE_TO_WISHLIST'

function wishlistReducer(state, action) {
  console.log(state, action)
  return state
}

export default function WishlistProvider(props) {
  const [wishlistState, dispatchWishlist] = useReducer(
    wishlistReducer, //controller for action example: clicks
    stateDefaultValue //default value of the state this will be the state
  )

  //state action to add items to wishlist
  const addProductToWishListHandler = (id) => {
    dispatchWishlist({ type: ADDWISHLIST, payload: id })
  }

  //state action to remove items from wishlist
  const removeProductToWishListHandler = (id) => {
    dispatchWishlist({ type: REMOVEWISHLIST, payload: id })
  }

  //this will be the value accessible by the other components
  const wishlistContextState = {
    wishlistProducts: wishlistState.wishlistProducts,
    addToWishlist: addProductToWishListHandler,
    removeFromWishlist: removeProductToWishListHandler,
  }

  return (
    <WishlistContext.Provider value={wishlistContextState}>
      {props.children}
    </WishlistContext.Provider>
  )
}
