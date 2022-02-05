import React from 'react';

const Modal = ({onCancel,onConfirm}) => {
  const cancelHandler = () => {
    onCancel()
  }
  const confirmlHandler = () => {
    onConfirm()
  }
  return (
    <div className="modal">
     <p>are you sure ?</p>
     <button className="btn btn--alt" onClick={cancelHandler}>cancel</button>
     <button className="btn" onClick={confirmlHandler}>Confirm</button>

    </div>
  );
}

export default Modal;
