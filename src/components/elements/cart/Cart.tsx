import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../redux/cart'
import { transformToCurrency } from '../helpers'
import styles from './Cart.module.css'
import Modal from '../modal/Modal'
import { useEffect, useRef } from 'react'
import GeneralState from '../../../state'

type CartProps = {
  cartHandler: () => void
}

export default function Cart({ cartHandler }: CartProps) {
  const { products, totalAmount } = useSelector(
    (state: GeneralState) => state.cartReducer
  )
  const sectionTitle = useRef<HTMLHeadingElement>(null)
  const dispatch = useDispatch()

  // clear all products from the cart
  function clearCart() {
    dispatch(cartActions.clearCart())
  }

  //remove products
  const removeProductFromCartHandler = (id: number) => {
    dispatch(cartActions.removeFromCart(id))
  }

  //product card for cart modal
  const productsOutput = products?.map(
    ({ id, image, title, price, quantity }) => {
      return (
        <div className={styles.productCard} key={id}>
          <div className={styles.productCardDetails}>
            <p>{title}</p>
            <p>
              {transformToCurrency(price)} x{quantity}
            </p>
          </div>
          <div className={styles.productCardImages}>
            <img src={image} alt={title} />
          </div>
          <button
            className="btn"
            onClick={() => removeProductFromCartHandler(id)}
          >
            Remove Item
          </button>
        </div>
      )
    }
  )

  useEffect(() => {
    if (sectionTitle.current) sectionTitle.current.focus()
  }, [])

  return (
    <Modal clickHandler={cartHandler}>
      <h1 tabIndex={0} className="margin-top-reset" ref={sectionTitle}>
        Cart
      </h1>
      <div>
        {products.length === 0 && <p>Your cart is currently empty!</p>}
        {productsOutput}
      </div>
      <p>Total: {transformToCurrency(totalAmount)}</p>
      {products.length >= 1 ? (
        <button className="btn" onClick={clearCart}>
          Clear All
        </button>
      ) : (
        <></>
      )}
      {products.length >= 1 ? (
        <button className="btn add-margin-top">Checkout</button>
      ) : (
        <></>
      )}
    </Modal>
  )
}
