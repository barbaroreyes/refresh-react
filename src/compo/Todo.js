import React from 'react';

const Todos  = ({text}) => {
  return (
    <div className="card">
     <h2>Title</h2>
     <div className="actions">
     <button className="btn">delete</button>
     </div>
     </div>
  
  );
}

export default Todos ;
