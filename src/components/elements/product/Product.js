import { useContext } from 'react'
import CartContext from '../../storage/CartContext'
import { transformToCurrency } from '../helpers'
import './product.css'
import { useSelector, useDispatch } from 'react-redux'
import { wishlistAction } from '../../../redux/wishlist'

export default function Product({ product }) {
  const { id, title, price, image } = product
  const dispatch = useDispatch()
  const wishlistProducts = useSelector(
    (state) => state.wishlistReducer.products
  )
  const { addProductToCart } = useContext(CartContext)

  //add to wishlist functionality
  const addWishlistHandler = (e) => {
    e.preventDefault()
    dispatch(wishlistAction.addToWishlist(product))
  }

  //remove to wishlist functionality
  const removeWishlistHandler = (e) => {
    e.preventDefault()
    dispatch(wishlistAction.removeFromWishlist(id))
  }

  //select if it should be add btn or the remove button
  //wonder if there is any way to improve this functionality
  const wishlistButtonController =
    wishlistProducts.findIndex((el) => el.id === id) === -1 ? (
      <button onClick={addWishlistHandler}>Add Wishlist</button>
    ) : (
      <button onClick={removeWishlistHandler}>Remove Wishlist</button>
    )

  //cart State
  const addProductToCartHandler = (e) => {
    e.preventDefault()
    addProductToCart(product, 1)
  }

  return (
    <div className="product-card">
      <div className="product-card--images">
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <p>{transformToCurrency(price)}</p>
      {wishlistButtonController}
      <button onClick={addProductToCartHandler}>Add Cart</button>
    </div>
  )
}
