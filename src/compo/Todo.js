import React , {useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
const Todos  = ({text}) => {
const [modalIsOpen ,setModalIsOpen] = useState(false)
  const handleDelete = () => {
    setModalIsOpen(true)
  }
  const closeHandleDelete = () => {
    setModalIsOpen(false)
  }
  return (
    <div className="card">
     <h2>{text}</h2>
     <div className="actions">
     <button className="btn" onClick = {handleDelete}>delete</button>
     </div>
     {modalIsOpen && <Modal/>}
     {modalIsOpen && <Backdrop onCancel = {closeHandleDelete}/>}
     
     </div>
  
  );
}

export default Todos ;
