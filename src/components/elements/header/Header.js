import './Header.css'
import styles from './Header.module.css'
import { WishlistIcon, CartIcon } from './icon'

export default function Header({ wishlistHandler, cartHandler }) {
  return (
    <div className={styles.header}>
      <h1>React Shop</h1>

      <div className={styles.nav}>
        <div className={styles.navIcon} onClick={wishlistHandler}>
          <WishlistIcon className={styles.iconCounter} />
          <p>Wishlist</p>
        </div>
        <div className={styles.navIcon} onClick={cartHandler}>
          <CartIcon className={styles.iconCounter} />
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}
