import './Plp.css'
import Product from '../product/Product'
import { productApi } from '../products-api'

export default function Plp() {
  const outputData = productApi.map((product) => <Product product={product} />)
  return <div className="plp-container">{outputData}</div>
}
