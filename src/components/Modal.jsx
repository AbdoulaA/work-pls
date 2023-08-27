import './Modal.css'

function Modal({confirm, title, yes, no}) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={confirm}>{no}</button>
          <button className="btn" onClick={confirm}>{yes}</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal
