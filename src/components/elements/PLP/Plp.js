import Product from '../product/Product'
import styles from './Plp.module.css'
import Loader from '../loader/Loader'
import { useEffect, useState } from 'react'

export default function Plp() {
  const [loading, setLoading] = useState(true)
  const [productApi, setProductApi] = useState([])

  const fetchProductsAPI = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (!response.ok) throw new Error('Could not fetch!')
      const products = await response.json()

      setProductApi(products)
    } catch (error) {
      throw new Error(`${error.message}, try again.`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductsAPI()
  }, [])

  const outputData = productApi?.map((product) => (
    <Product key={product.id} product={product} />
  ))

  return (
    <main className={styles.plpContainer}>
      {loading ? <Loader /> : outputData}
    </main>
  )
}
