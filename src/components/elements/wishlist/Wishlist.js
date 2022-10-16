import { useContext } from 'react'
import WishlistContext from '../../storage/WishlistContext'
import Modal from '../modal/Modal'
import Product from '../product/Product'

export default function Wishlist({ wishlistHandler }) {
  const { wishlistProducts } = useContext(WishlistContext)

  const outputWishedProducts = wishlistProducts?.map((product) => (
    <Product key={product.id} product={product} />
  ))

  return (
    <Modal clickHandler={wishlistHandler}>
      <h1>wishlistProducts</h1>
      {wishlistProducts.length === 0 && <h4>Add products to your wishlist</h4>}
      {outputWishedProducts}
    </Modal>
  )
}
