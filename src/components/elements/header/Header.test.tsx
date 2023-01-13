import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { Provider } from 'react-redux'
import store from '../../../redux/index'

describe('test the header component', () => {
  test('check if header in rendering correctly', () => {
    render(
      <Provider store={store}>
        <Header wishlistHandler={() => {}} cartHandler={() => {}} />
      </Provider>
    )

    const productImages: HTMLLIElement[] = screen.getAllByRole('button') //li is role as button because of accessability.
    expect(productImages).toHaveLength(2)
    expect(screen.getByText(/React Shop/)).toBeInTheDocument()
  })
})
