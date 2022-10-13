import './product.css'
export default function Product({ product }) {
  const { title, price, image } = product
  // {
  //   id: 1,
  //   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //   price: 109.95,
  //   description:
  //     'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //   category: "men's clothing",
  //   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //   rating: {
  //     rate: 3.9,
  //     count: 120,
  //   },

  return (
    <div className="product-card">
      <div class="product-card--images">
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  )
}
