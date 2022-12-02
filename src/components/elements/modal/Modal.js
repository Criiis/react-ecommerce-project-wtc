import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const portalElement = document.querySelector('#overlays') //'../../../../public/index.html'

function Backdrop({ clickHandler, children }) {
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

function ModalOverlay({ children }) {
  return (
    <div className={styles.modal}>
      <div className="content">{children}</div>
    </div>
  )
}

export default function Modal({ clickHandler, children }) {
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
