import { useContext } from 'react'
import CartContext from '../../storage/CartContext'
import { transformToCurrency } from '../helpers'
import Modal from '../modal/Modal'

export default function Cart({ cartHandler }) {
  const {
    totalAmount,
    products,
    clearProductsFromCart,
    removeProductFromCart,
  } = useContext(CartContext)

  // function removeProduct(e) {
  //   e.preventDefault()
  //   removeProductFromCart(product.id)
  // }

  //product card for cart modal
  const productsOutput = products?.map((product) => {
    return (
      <div className="product-card" key={product.id}>
        <div className="product-card--images">
          <img src={product.image} alt={product.title} />
        </div>
        <p>{product.title}</p>
        <p>
          {transformToCurrency(product.price)} x{product.quantity}
        </p>
        <button onClick={() => removeProductFromCart(product.id)}>
          Remove Item
        </button>
      </div>
    )
  })

  return (
    <Modal clickHandler={cartHandler}>
      <h1>Cart</h1>
      {productsOutput}
      <p>total: {transformToCurrency(totalAmount)}</p>
      <button onClick={clearProductsFromCart}>Clear All</button>
    </Modal>
  )
}

//
// addProductToCart
// clearProductsFromCart
// products
// removeProductFromCart
// totalAmount
