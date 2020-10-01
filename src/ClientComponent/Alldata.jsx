import React, {useState} from 'react';
import "./Style.css";
import NavBarSomeText from'./NavBarSomeText';
import Meme from './printdata';


export default function Data() {
    const [pictures, setPictures] = useState([
        {name: 'Laught', description:"It's fun!", path:'./pics/1.png', altImg:"Not found"},
        {name: 'Oh No!', description:"yes...no...", path:'./pics/2.png', altImg:"Not found"},
        {name: 'So smart', description:"..", path:'./pics/3.png', altImg:"Not found"},
        {name: 'Code', description:"So simple..or not?", path:'./pics/4.png', altImg:"Not found"},
        {name: 'No...', description:"So old..", path:'./pics/5.png', altImg:"Not found"},
        {name: 'Javascript', description:"I love it!", path:'./pics/6.png', altImg:"Not found"},
        {name: 'JS', description:"Calc", path:'./pics/7.png', altImg:"Not found"},
        {name: 'Brain Work', description:"WOW!", path:'./pics/8.png', altImg:"Not found"},
        {name: 'What?!', description:"Again..What?!", path:'./pics/9.png', altImg:"Not found"}

    ]);
    const addPict = (newImage) => {
        setPictures([pictures, ...newImage]) ; 
    };
    return (
        <div className="container">
            <div className="row">
                <NavBarSomeText addPict ={addPict}/>
                <Meme pictures={pictures}/> 
            </div>
        </div>
    );
}