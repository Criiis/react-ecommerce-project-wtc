import { useContext } from 'react'
import WishlistContext from '../../storage/WishlistContext'
import { transformToCurrency } from '../helpers'
import './product.css'

export default function Product({ product }) {
  const wishlistCTX = useContext(WishlistContext)
  const { id, title, price, image } = product

  const addWishlistHandler = (e) => {
    e.preventDefault()
    wishlistCTX.addToWishlist(id)
  }

  const removeWishlistHandler = (e) => {
    e.preventDefault()
    wishlistCTX.removeFromWishlist(id)
  }

  return (
    <div className="product-card">
      <div className="product-card--images">
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <p>{transformToCurrency(price)}</p>

      <button onClick={addWishlistHandler}>Add Wishlist</button>
      <button onClick={removeWishlistHandler}>Remove Wishlist</button>
      <button>Add Cart</button>
    </div>
  )
}
