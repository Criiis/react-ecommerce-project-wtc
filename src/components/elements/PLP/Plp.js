import './Plp.css'
import Product from '../product/Product'
import { fakeAPI } from '../products-api'
import { useEffect, useState } from 'react'

export default function Plp() {
  const [productApi, setProductApi] = useState(fakeAPI)

  const fetchProductsAPI = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (!response.ok) throw new Error('Could not fetch!')
      const products = await response.json()

      setProductApi(products)
    } catch (error) {
      throw new Error(`${error.message}, try again.`)
    }
  }

  useEffect(() => {
    fetchProductsAPI()
  }, [])

  const outputData = productApi?.map((product) => (
    <Product key={product.id} product={product} />
  ))

  return <div className="plp-container">{outputData}</div>
}
