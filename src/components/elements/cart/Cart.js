import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../redux/cart'
import { transformToCurrency } from '../helpers'
import Modal from '../modal/Modal'

export default function Cart({ cartHandler }) {
  const { products, totalAmount } = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  // clear all products from the cart
  function clearCart(e) {
    e.preventDefault()
    dispatch(cartActions.clearCart())
  }

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
        <button onClick={() => console.log('remove items!')}>
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
      <button onClick={clearCart}>Clear All</button>
    </Modal>
  )
}
