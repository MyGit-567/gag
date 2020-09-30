import React, { useState } from 'react';
import "./Style.css";
import Navbar from'./Navbar';


export default function Data() {
    const [pictures, setPictures] = useState([
        {name: 'a', description:"bla", path:'./pics/1.png'}
    ]);
    const addPict = (newImage) => {
        setPictures([pictures, ...newImage]) ;
    };
    return (
        <div className="container">
            <div className="row">
                <Navbar
                addPict ={addPict}/>
            </div>
            <div className="row">
                <div className="col-md-3">
            </div>
            <div className="col-md-3">
                
                </div>
            </div>
        </div>
    )
}