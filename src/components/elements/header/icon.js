import { useSelector } from 'react-redux'

export function WishlistIcon(props) {
  const wishlistProducts = useSelector(
    (state) => state.wishlistReducer.products
  )

  return (
    <>
      <svg
        aria-hidden="true"
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
      {wishlistProducts.length > 0 && (
        <span className={props.className} aria-hidden="true">
          {wishlistProducts.length}
        </span>
      )}
    </>
  )
}

export function CartIcon(props) {
  const products = useSelector((state) => state.cartReducer.products)

  const numberOfItems = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  )

  return (
    <>
      <svg
        aria-hidden="true"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_301_830)">
          <path
            d="M5.53076 6.92582C5.53076 5.35328 6.15545 3.84513 7.26741 2.73317C8.37937 1.62121 9.88752 0.996521 11.4601 0.996521C13.0326 0.996521 14.5408 1.62121 15.6527 2.73317C16.7647 3.84513 17.3894 5.35328 17.3894 6.92582"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.8854 11.8232L21.8847 11.8223C21.9393 11.5682 21.9363 11.3051 21.8759 11.0523C21.8155 10.7995 21.6993 10.5635 21.5358 10.3615C21.3722 10.1595 21.1655 9.99666 20.9309 9.88498C20.6962 9.77329 20.4395 9.71558 20.1796 9.71607H2.74046C2.48056 9.71559 2.22386 9.77332 1.98919 9.88501C1.75452 9.99671 1.54784 10.1595 1.38431 10.3615C1.22079 10.5635 1.10458 10.7996 1.0442 11.0524C0.983827 11.3052 0.980823 11.5683 1.03541 11.8224L1.03473 11.8232L2.77563 20.5283L2.77662 20.5334L2.7785 20.5428L2.77986 20.5439C2.86319 20.9342 3.07789 21.2841 3.3881 21.5352C3.69832 21.7862 4.08528 21.9233 4.48437 21.9235H18.4357C18.8084 21.9226 19.171 21.8019 19.4699 21.5793C19.7688 21.3566 19.9882 21.0438 20.0958 20.6869L20.1069 20.6786L20.1225 20.6009C20.1344 20.5527 20.144 20.5041 20.1519 20.4544L21.8854 11.8232Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_301_830">
            <rect width="22.92" height="22.92" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {numberOfItems > 0 && (
        <span className={props.className} aria-hidden="true">
          {numberOfItems}
        </span>
      )}
    </>
  )
}
