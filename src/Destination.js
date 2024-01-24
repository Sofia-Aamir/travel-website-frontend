import React from "react";
import borabora from './assessts/borabora.jpg';
import borabora2 from './assessts/borabora2.jpg';
import keywest from './assessts/keywest.jpg';
import maldives from './assessts/maldives.jpg';
import maldives3 from './assessts/maldives3.jpg';
import './Destination.css';

function Destination (){
    return (
        <div className="destination">
        <div className="destination-content">
         <h1 style={{color : "black"}}>All Inclusive Resorts</h1>
         <p style={{color : "black"}}>World Best Travel and Tour Places</p>
        <div className="img-container">
        <img className='span-3 image-grid-row-2' src={borabora} alt="/"/>
                    <img src={borabora2} alt="/"/>
                    <img src={maldives} alt="/"/>
                    <img src={maldives3} alt="/"/>
                    <img src={keywest} alt="/"/>
        </div>
        </div>
        </div>
    )
    
}


export default Destination;