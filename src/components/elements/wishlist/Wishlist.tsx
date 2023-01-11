import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../modal/Modal'
import Product from '../product/Product'
import styles from './Wishlist.module.css'
import { RootState } from '../../../redux'

type WishlistProps = {
  wishlistHandler: () => void
}

const Wishlist = ({ wishlistHandler }: WishlistProps) => {
  const sectionTitle = useRef<HTMLHeadingElement>(null)
  const wishlistProducts = useSelector(
    ({ wishlistReducer }: RootState) => wishlistReducer.products
  )

  const outputWishedProducts = wishlistProducts?.map((product) => (
    <Product key={product.id} product={product} />
  ))

  useEffect(() => {
    if (sectionTitle.current) sectionTitle.current.focus()
  }, [])

  return (
    <Modal clickHandler={wishlistHandler}>
      <h1 tabIndex={0} className="margin-top-reset" ref={sectionTitle}>
        Wishlist
      </h1>

      {wishlistProducts.length === 0 ? (
        <p>Your wishlist is currently empty!</p>
      ) : (
        <></>
      )}
      <div className={styles.productContainer}>{outputWishedProducts}</div>
    </Modal>
  )
}

export default Wishlist
