import React from 'react';
import "../styles/homePage.css"
import logo from '../images/Logo_darkgreen.png';

export default function header ({getMarketPage, getAboutPage}) {

    return (
        <div className="header"> 
            <div className="logo-container">
                <img src= {logo} className="logo"></img>
            </div>
            <div className="navigation-container">
                    <button className= "btn btn-primary">Home</button>
                    <button className= "btn btn-primary" onClick = {getMarketPage}>Market</button>
                    <button className= "btn btn-primary" onClick = {getAboutPage}>About us</button>
            </div>      
        </div>
    )

}