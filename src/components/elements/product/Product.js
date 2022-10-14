import { useContext } from 'react'
import WishlistContext from '../../storage/WishlistContext'
import { transformToCurrency } from '../helpers'
import './product.css'

export default function Product({ product }) {
  const { wishlistProducts, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext)
  const { id, title, price, image } = product

  //add to wishlist functionality 
  const addWishlistHandler = (e) => {
    e.preventDefault()
    addToWishlist(product)
  }

  //remove to wishlist functionality 
  const removeWishlistHandler = (e) => {
    e.preventDefault()
    removeFromWishlist(id)
  }

  //select if it should be add btn or the remove button
  //wonder if there is any way to improve this functionality 
  const wishlistButtonController =
    wishlistProducts.findIndex((el) => el.id === id) === -1 ? (
      <button onClick={addWishlistHandler}>Add Wishlist</button>
    ) : (
      <button onClick={removeWishlistHandler}>Remove Wishlist</button>
    )

  return (
    <div className="product-card">
      <div className="product-card--images">
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <p>{transformToCurrency(price)}</p>
      {wishlistButtonController}
      <button>Add Cart</button>
    </div>
  )
}
