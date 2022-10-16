import { useReducer } from 'react'
import WishlistContext from './WishlistContext'

const stateDefaultValue = {
  wishlistProducts: [],
}

const ADDWISHLIST = 'ADD_TO_WISHLIST'
const REMOVEWISHLIST = 'REMOVE_TO_WISHLIST'

function wishlistReducer(state, action) {
  switch (action.type) {
    case ADDWISHLIST: {
      const stateProducts = state.wishlistProducts
      if (stateProducts.includes(action.payload))
        return { wishlistProducts: stateProducts }
      const wishlistProducts = [...stateProducts, action.payload]
      return { wishlistProducts }
    }
    case REMOVEWISHLIST: {
      let stateProducts = state.wishlistProducts
      const indexOfProduct = stateProducts.findIndex(
        (el) => el.id === action.payload
      )

      if (indexOfProduct === -1) return { wishlistProducts: stateProducts }

      stateProducts.splice(indexOfProduct, 1)
      return { wishlistProducts: stateProducts }
    }
    default:
      return state
  }
}

export default function WishlistProvider(props) {
  const [wishlistState, dispatchWishlist] = useReducer(
    wishlistReducer, //controller for action example: clicks
    stateDefaultValue //default value of the state this will be the state
  )

  //state action to add items to wishlist
  const addProductToWishListHandler = (item) => {
    dispatchWishlist({ type: ADDWISHLIST, payload: item })
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
