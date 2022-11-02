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

  //remove products
  const removeProductFromCartHandler = (e, id) => {
    e.preventDefault()
    dispatch(cartActions.removeFromCart(id))
  }

  //product card for cart modal
  const productsOutput = products?.map(
    ({ id, image, title, price, quantity }) => {
      return (
        <div className="product-card" key={id}>
          <div className="product-card--images">
            <img src={image} alt={title} />
          </div>
          <p>{title}</p>
          <p>
            {transformToCurrency(price)} x{quantity}
          </p>
          <button onClick={(e) => removeProductFromCartHandler(e, id)}>
            Remove Item
          </button>
        </div>
      )
    }
  )

  return (
    <Modal clickHandler={cartHandler}>
      <h1>Cart</h1>
      {productsOutput}
      <p>total: {transformToCurrency(totalAmount)}</p>
      <button onClick={clearCart}>Clear All</button>
    </Modal>
  )
}
