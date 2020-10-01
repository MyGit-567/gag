import React from 'react';
import "./Style.css"; 
  
function Print({pictures}) {
  return (<div> {pictures.map((pict) => (
      <div className="img">
        <h1>{pict.name}</h1>
        <h1>{pict.description}</h1>
        <img src={pict.path} alt={pict.altImg}/>
      </div>
  ))}</div>
  );   
}

export default Print;


