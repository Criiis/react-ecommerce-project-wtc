import ReactDOM from 'react-dom'
import './Modal.css'

const portalElement = document.querySelector('#overlays') //'../../../../public/index.html'

function Backdrop({ wishlistHandlerFunction, children }) {
  return (
    <div className="backdrop" onClick={wishlistHandlerFunction}>
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

export default function Modal({ wishlistHandlerFunction, children }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop wishlistHandlerFunction={wishlistHandlerFunction} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}
