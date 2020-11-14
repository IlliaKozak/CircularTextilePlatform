import React from 'react';
import "../styles/homePage.css"
import logo from '../images/Logo_darkgreen.png';
import Button from "@material-ui/core/Button";


export default function header ({getHomePage, getMarketPage, getAboutPage}) {

    return (
        <div className="header"> 
            <div className="logo-container">
                <img src= {logo} className="logo" alt="logo"></img>
            </div>
            <div className="navigation-container">
                    <Button variant="contained" color="primary" onClick = {getHomePage}>Home</Button>
                    <button className= "btn btn-primary" onClick = {getMarketPage}>Market</button>
                    <button className= "btn btn-primary" onClick = {getAboutPage}>About us</button>
            </div>      
        </div>
    )

}