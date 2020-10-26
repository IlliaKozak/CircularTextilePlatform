import React from 'react';
import "../styles/homePage.css"
import HeaderComponent from "../components/HeaderComponent";
import logo from '../images/Logo_darkgreen.png';

const homePage = (props) => {

    const toMarketPage = () => {
        props.history.push("/getOffers");
    }

    const toAboutPage = () => {
        props.history.push("/about");
    }

    return(
        <div>
            <div className="page-top">
                <HeaderComponent getMarketPage = {toMarketPage} getAboutPage = {toAboutPage}></HeaderComponent>

                <div className = "home-intro">
                    <div className = "logo-big-container">
                        <img className="logo-big" src={logo} alt="homeLogo"/>
                    </div>
                    <div className= "intro-container">
                        <h1>Let's go circulair</h1>
                        <h3>Make use of your waste</h3>

                        <div>
                            <button className = "btn btn-primary">Join now</button>
                            <button className = "btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className = "partners-list">
                   <h2>Logos of future partners</h2> 
            </div>
            
            <div className = "home-content">
                <h2>Role of CTS</h2>
                <article>
                CTS is a online comunication platform which serves as the connection between 
                companies within the circular textile supply chain. 
                
                </article>
            </div>
        </div>
    )
}

export default homePage;