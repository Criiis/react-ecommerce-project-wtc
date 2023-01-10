import styles from './Header.module.css'
import { WishlistIcon, CartIcon } from './icon'

type HeaderProps = {
  wishlistHandler: any //should be a function void to control the popup
  cartHandler: any //should be a function void to control the popup
}

const Header = ({ wishlistHandler, cartHandler }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.header}>
      <h1>React Shop</h1>

      <nav>
        <ul className={styles.nav}>
          <li
            className={styles.navIcon}
            onClick={wishlistHandler}
            aria-label="open wishlist section"
            role="button"
          >
            <WishlistIcon className={styles.iconCounter} />
            <p aria-hidden="true">Wishlist</p>
          </li>

          <li
            className={styles.navIcon}
            onClick={cartHandler}
            aria-label="open cart section"
            role="button"
          >
            <CartIcon className={styles.iconCounter} />
            <p aria-hidden="true">Cart</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
