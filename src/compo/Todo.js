import React from 'react';

const Todos  = ({text}) => {
  const handleDelete = () => {
    console.log(text)
  }
  return (
    <div className="card">
     <h2>{text}</h2>
     <div className="actions">
     <button className="btn" onClick = {handleDelete}>delete</button>
     </div>
     </div>
  
  );
}

export default Todos ;
