import { useContext } from 'react'
import WishlistContext from '../../storage/WishlistContext'
import Modal from '../modal/Modal'
import Product from '../product/Product'

export default function Wishlist({ wishlistHandler }) {
  const { wishlistProducts } = useContext(WishlistContext)
  console.log(wishlistProducts)

  const outputWishedProducts = wishlistProducts?.map((product) => (
    <Product kry={product.id} product={product} />
  ))

  return (
    <Modal wishlistHandlerFunction={wishlistHandler}>
      <h1>wishlistProducts</h1>
      {wishlistProducts.length === 0 && <h4>Add products to your wishlist</h4>}
      {outputWishedProducts}
    </Modal>
  )
}
