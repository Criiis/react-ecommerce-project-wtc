import './Header.css'
import { WishlistIcon, CartIcon } from './icon'

export default function Header() {
  return (
    <div className="header">
      <h1>React Shop</h1>

      <div class="nav">
        <div className="nav--icon">
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
