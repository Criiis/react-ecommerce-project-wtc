import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const portalElement = document.querySelector('#overlays')! //'../../../../public/index.html'

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
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}
export default Modal
