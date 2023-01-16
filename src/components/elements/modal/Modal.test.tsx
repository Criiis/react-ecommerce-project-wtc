import '@testing-library/jest-dom'
import { render, screen, fireEvent, getByText } from '@testing-library/react'
import { Provider } from 'react-redux'
import Modal from './Modal'
// import store from './redux/index'
// import userEvent from '@testing-library/user-event'

test('modal shows the children and a close button', () => {
  // Arrange
  const handleClose = jest.fn()

  // Act
  render(
    <Modal clickHandler={handleClose}>
      <p>hello world!</p>
    </Modal>
  )

  // Assert
  const modalText = screen.getByText(/hello world/i)
  expect(modalText).toBeTruthy()

  // Act
  const backgroundButton = screen.getByRole('button', {
    name: /click to close the section/i,
  })
  fireEvent.click(backgroundButton)

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1)
})
