export default interface GeneralState {
  cartReducer: cartReducer
  wishlistReducer: wishlistReducer
}

//wishlist reducer for state
interface wishlistReducer {
  products: product[]
  wishlistPopUpController: boolean
}

//cart reducer for state
interface cartReducer {
  products: productCart[]
  totalAmount: number
  cartPopUpController: boolean
}

interface productCart extends product {
  quantity: number
}

export interface product {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: rating
  title: string
}

interface rating {
  count: number
  rate: number
}
