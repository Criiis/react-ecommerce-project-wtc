import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
import { useEffect } from 'react'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'overlays')
document.body.appendChild(modalRoot)

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
  const el = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(el)
    return () => {
      modalRoot.removeChild(el)
    }
  }, [el])

  return (
    <>
      {ReactDOM.createPortal(<Backdrop clickHandler={clickHandler} />, el)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, el)}
    </>
  )
}
export default Modal
