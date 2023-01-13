import { rest } from 'msw'

export const handlers = [
  // Provide request handlers
  rest.get('https://fakestoreapi.com/products', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: 'Product 1',
          price: 109.95,
          description: 'description 1',
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: 'Product 2',
          price: 22.3,
          description: 'description 2',
          category: "men's clothing",
          image:
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
      ])
    )
  }),
]
