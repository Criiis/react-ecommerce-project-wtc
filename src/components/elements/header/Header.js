import './Header.css'
import { WishlistIcon, CartIcon } from './icon'

export default function Header({ wishlistHandler }) {
  return (
    <div className="header">
      <h1>React Shop</h1>

      <div className="nav">
        <div className="nav--icon" onClick={wishlistHandler}>
          <WishlistIcon />
          <p>Wishlist</p>
        </div>
        <div className="nav--icon">
          <CartIcon />
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}
