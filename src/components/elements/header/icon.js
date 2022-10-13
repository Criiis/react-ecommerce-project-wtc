import { useContext } from 'react'
import WishlistContext from '../../storage/WishlistContext'

export function WishlistIcon() {
  const { wishlistProducts } = useContext(WishlistContext)

  return (
    <>
      <svg
        width="25"
        height="23"
        viewBox="0 0 25 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 3.3835C9.22083 -2.24358 0 -0.600873 0 6.45017C0 11.3054 5.80313 16.27 12.5 22.9168C19.1979 16.27 25 11.3054 25 6.45017C25 -0.624831 15.7552 -2.20192 12.5 3.3835Z"
          fill="white"
        />
      </svg>
      <p>{wishlistProducts.length}</p>
    </>
  )
}

export function CartIcon() {
  return (
    <svg
      width="31"
      height="23"
      viewBox="0 0 31 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.19 19.1C16.1357 19.1 15.28 19.9557 15.28 21.01C15.28 22.0656 16.1357 22.92 17.19 22.92C18.2443 22.92 19.1 22.0656 19.1 21.01C19.1 19.9557 18.2443 19.1 17.19 19.1ZM12.7333 21.01C12.7333 22.0656 11.8777 22.92 10.8233 22.92C9.76901 22.92 8.91333 22.0656 8.91333 21.01C8.91333 19.9557 9.76901 19.1 10.8233 19.1C11.8777 19.1 12.7333 19.9557 12.7333 21.01ZM30.56 0L29.6139 2.54667H27.1577L22.7354 17.8267H5.87771L0 3.82H2.76186L7.56997 15.28H20.8483L25.2184 0H30.56ZM8.91333 5.09333H19.1V7.64H8.91333V5.09333Z"
        fill="white"
      />
    </svg>
  )
}
