import { transformToCurrency } from '../helpers'
import './product.css'
export default function Product({ product }) {
  const { title, price, image } = product

  return (
    <div className="product-card">
      <div className="product-card--images">
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <p>{transformToCurrency(price)}</p>

      <button>Add Wishlist</button>
      <button>Add Cart</button>
    </div>
  )
}
