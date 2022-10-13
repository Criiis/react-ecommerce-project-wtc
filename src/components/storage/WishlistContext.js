import React from 'react'

//context will be the default value for the provider in WishlistProvider
const WishlistContext = React.createContext({
  wishlistProducts: [],
  addToWishlist: (id) => {},
  removeFromWishlist: (id) => {},
})
export default WishlistContext
