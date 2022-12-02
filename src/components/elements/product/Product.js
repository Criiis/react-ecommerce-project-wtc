import styles from './Product.module.css'
import { transformToCurrency } from '../helpers'
import { useSelector, useDispatch } from 'react-redux'
import { wishlistAction } from '../../../redux/wishlist'
import { cartActions } from '../../../redux/cart'
import { useRef, useState } from 'react'

export default function Product({ product }) {
  const imageElement = useRef()
  const initialText = 'Add to cart'
  const [addButtonText, setAddButtonText] = useState(initialText)
  const { id, title, price, image } = product
  const dispatch = useDispatch()
  const wishlistProducts = useSelector(
    (state) => state.wishlistReducer.products
  )

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

  //cart State
  const addProductToCartHandler = (e) => {
    e.preventDefault()
    if (addButtonText !== initialText) return
    dispatch(cartActions.addToCart({ product, quantity: 1 }))

    setAddButtonText('Product added')
    setTimeout(() => {
      setAddButtonText(initialText)
    }, 1000)
  }

  const loadingImageController = () => {
    imageElement.current.classList.remove('loading')
  }

  //select if it should be add btn or the remove button
  //wonder if there is any way to improve this functionality
  const wishlistButtonController =
    wishlistProducts.findIndex((el) => el.id === id) === -1 ? (
      <button
        aria-label="Click to add to wishlist"
        className={styles.wishlistButton}
        onClick={addWishlistHandler}
      >
        {wishlistIcon}
      </button>
    ) : (
      <button
        aria-label="Product added to wishlist click to remove from wishlist"
        className={styles.wishlistButton}
        onClick={removeWishlistHandler}
      >
        {wishlistedIcon}
      </button>
    )

  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImage}>
        <img
          className="loading"
          src={image}
          alt={title}
          ref={imageElement}
          onLoad={loadingImageController}
        />
      </div>
      <p className={styles.productName}>{title}</p>
      <p className={styles.ProductPrice}>{transformToCurrency(price)}</p>
      {wishlistButtonController}
      <button className="btn" onClick={addProductToCartHandler}>
        {addButtonText}
      </button>
    </div>
  )
}

//icons for wishlist
const wishlistIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8483 0.0102852C14.2028 0.0102852 12.6524 0.740533 11.4873 2.06218L11.0068 2.60729L10.5172 2.05189C9.35215 0.730248 7.80177 0 6.15619 0C4.51515 0 2.9693 0.725105 1.80424 2.04675C0.639192 3.3684 0 5.12202 0 6.98878C0 8.85554 0.643726 10.6092 1.80878 11.9308L10.4447 21.7274L10.4628 21.748C10.6124 21.9177 10.8119 22 11.0068 22C11.2063 22 11.4057 21.9126 11.5553 21.7429L20.1912 11.9462C21.3563 10.6246 22 8.87097 22 7.00421C22 5.13745 21.3608 3.37868 20.1958 2.06218C19.0352 0.73539 17.4894 0.0102852 15.8483 0.0102852ZM19.0942 10.6966L11.0113 19.871L2.91036 10.6812C2.03998 9.69378 1.55945 8.38242 1.55491 6.98364C1.55491 5.59 2.03091 4.27863 2.9013 3.29126C3.77169 2.30902 4.92767 1.76391 6.15166 1.76391C7.38471 1.76391 8.5407 2.30902 9.41562 3.30154L10.4537 4.4792C10.7439 4.80832 11.2607 4.80832 11.5553 4.4792L12.5889 3.30669C13.4593 2.31931 14.6198 1.77419 15.8483 1.77419C17.0769 1.77419 18.2328 2.31931 19.1032 3.30669C19.9736 4.29406 20.4542 5.60542 20.4496 7.00421C20.4496 8.39785 19.9691 9.70921 19.0942 10.6966Z"
      fill="white"
    />
  </svg>
)
const wishlistedIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 3.24814C8.11433 -2.15382 0 -0.576835 0 6.19213C0 10.8531 5.10675 15.6191 11 22C16.8942 15.6191 22 10.8531 22 6.19213C22 -0.599834 13.8646 -2.11383 11 3.24814Z"
      fill="white"
    />
  </svg>
)
