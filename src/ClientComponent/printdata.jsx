import React from 'react';
import "./Style.css";
export default function Meme({pictures}) {

  return (
    <div >
      <div className="img">
        <h1>{pictures[0].name}</h1>
        <h1>{pictures[0].description}</h1>
        <img src={pictures[0].path} alt={pictures[0].altImg}/>
      
    </div>
    </div> 
  )
}


