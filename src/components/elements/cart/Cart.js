import { useContext } from 'react'
import CartContext from '../../storage/CartContext'
import Modal from '../modal/Modal'

export default function Cart({ cartHandler }) {
  const { totalAmount, products } = useContext(CartContext)

  const productsOutput = products?.map((product) => {
    return (
      <h1>
        {product.title} x{product.quantity}
      </h1>
    )
  })

  return (
    <Modal clickHandler={cartHandler}>
      <h1>Cart</h1>
      {productsOutput}
      <p>total: {totalAmount}</p>
      <button>Clear All</button>
    </Modal>
  )
}

//
// addProductToCart
// clearProductsFromCart
// products
// removeProductFromCart
// totalAmount
