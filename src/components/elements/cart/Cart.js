import { useContext } from 'react'
import CartContext from '../../storage/CartContext'
import Modal from '../modal/Modal'

export default function Cart({ cartHandler }) {
  const test = useContext(CartContext)
  console.log(test)
  return (
    <Modal clickHandler={cartHandler}>
      <h1>Cart</h1>
    </Modal>
  )
}
