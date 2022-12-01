import { useSelector } from 'react-redux'
import Modal from '../modal/Modal'
import Product from '../product/Product'
import styles from './Wishlist.module.css'

export default function Wishlist({ wishlistHandler }) {
  const wishlistProducts = useSelector(
    (state) => state.wishlistReducer.products
  )

  const outputWishedProducts = wishlistProducts?.map((product) => (
    <Product key={product.id} product={product} />
  ))

  return (
    <Modal clickHandler={wishlistHandler}>
      <h1 className={styles.popupTitle}>Wishlist</h1>
      {wishlistProducts.length === 0 && (
        <p>Your wishlist is currently empty!</p>
      )}
      <div className={styles.productContainer}>{outputWishedProducts}</div>
    </Modal>
  )
}
