import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('test the footer component', () => {
  test('Render footer', () => {
    render(<Footer />)
    const content = screen.getByText(/With Love from Cristiano Luis!/)
    expect(content).toBeInTheDocument()
  })

  //could check for the footer element to be in the page
  // for this test to pass i need to give role footer to footer, it doesn't make sense to me ..
  test('find footer tag', () => {
    render(<Footer />)
    const footer = screen.getByRole('footer')
    expect(footer).toBeInTheDocument()
  })
})
