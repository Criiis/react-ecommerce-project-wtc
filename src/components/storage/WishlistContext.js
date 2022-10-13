//context will be the default value for the state
const wishlistContext = React.createContext({
  wishlistProducts: [],
  addToWishlist: (id) => {},
  removeFromWishlist: (id) => {},
})
