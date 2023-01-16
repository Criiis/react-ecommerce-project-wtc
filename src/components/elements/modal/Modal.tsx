import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'overlays')
document.body.appendChild(modalRoot)
const container: HTMLElement = document.querySelector('#overlays')!

type BackdropProps = {
  clickHandler: () => void
  children?: JSX.Element | JSX.Element[]
}

const Backdrop = ({ clickHandler, children }: BackdropProps) => {
  return (
    <div
      className={styles.backdrop}
      onClick={clickHandler}
      aria-label="click to close the section"
      role="button"
    >
      {children}
    </div>
  )
}

type ModalOverlayProps = {
  children: JSX.Element | JSX.Element[]
}
const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={styles.modal}>
      <div className="content">{children}</div>
    </div>
  )
}

type ModalProps = {
  clickHandler: () => void
  children: JSX.Element | JSX.Element[]
}

const Modal = ({ clickHandler, children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop clickHandler={clickHandler} />,
        container
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        container
      )}
    </>
  )
}
export default Modal
