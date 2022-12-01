import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../redux/cart'
import { transformToCurrency } from '../helpers'
import styles from './Cart.module.css'
import './Cart.css'
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
          <div className="product-card--details">
            <p>{title}</p>
            <p>
              {transformToCurrency(price)} x{quantity}
            </p>
          </div>
          <div className="product-card--images">
            <img src={image} alt={title} />
          </div>
          <button
            className="btn"
            onClick={(e) => removeProductFromCartHandler(e, id)}
          >
            Remove Item
          </button>
        </div>
      )
    }
  )

  return (
    <Modal clickHandler={cartHandler}>
      <h1 className="title">Cart</h1>
      <div className="product-container">
        {products.length === 0 && <p>Your cart is currently empty!</p>}
        {productsOutput}
      </div>
      <p>Total: {transformToCurrency(totalAmount)}</p>
      {products.length > 1 && <button onClick={clearCart}>Clear All</button>}
    </Modal>
  )
}
