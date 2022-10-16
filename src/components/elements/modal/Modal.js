import ReactDOM from 'react-dom'
import './Modal.css'

const portalElement = document.querySelector('#overlays') //'../../../../public/index.html'

function Backdrop({ clickHandler, children }) {
  return (
    <div className="backdrop" onClick={clickHandler}>
      {children}
    </div>
  )
}

function ModalOverlay({ children }) {
  return (
    <div className="modal">
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
