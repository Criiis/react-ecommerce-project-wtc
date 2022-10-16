import ReactDOM from 'react-dom'
import './Modal.css'

const portalElement = document.querySelector('#overlays') //'../../../../public/index.html'

function Backdrop(props) {
  return (
    <div className="backdrop" onClick={props.wishlistHandlerFunction}>
      {props.children}
    </div>
  )
}
function ModalOverlay(props) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  )
}

export default function Modal(props) {
  console.log(props)
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop wishlistHandlerFunction={props.wishlistHandlerFunction} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}
