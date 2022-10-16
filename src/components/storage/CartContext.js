import React from 'react'

//context will be the default value for the state
const CartContext = React.createContext({
  products: [],
  totalAmount: 0,
  addProductToCart: (item, quantity) => {},
  removeProductFromCart: (id) => {},
  clearProductsFromCart: () => {},
})
export default CartContext
