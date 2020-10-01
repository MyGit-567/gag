import React, {useState} from 'react';
import "./Style.css";
import NavBarSomeText from'./NavBarSomeText';
import Meme from './printdata';


export default function Data() {
    const [pictures, setPictures] = useState([
        {name: 'Laught', description:"It's fun!", path:'./pics/1.png', altImg:"Not found"},
        {name: 'Oh No!', description:"yes...no...", path:'./pics/2.png', altImg:"Not found"},
        {name: 'So smart', description:"..", path:'./pics/3.png', altImg:"Not found"}
    ]);
    const addPict = (newImage) => {
        setPictures([pictures, ...newImage]) ; 
    };
    return (
        <div className="container">
            <div className="row">
                <NavBarSomeText 
                addPict ={addPict}/> 
            </div>
            <div className="row">
                <div className="col-md-3"><br></br>
                    <Meme 
                    pictures={pictures}/>
            </div>
            <div className="col-md-3">
                </div>
            </div>
        </div>
    );
}