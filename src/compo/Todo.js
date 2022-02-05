import React from 'react';

const Todos  = ({text}) => {
  return (
    <div className="container">
     <div className="card">
     <p>{text}</p>
      <button className="btn">delete</button>
     </div>
    
    </div>
  );
}

export default Todos ;
