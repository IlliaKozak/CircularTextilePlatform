import React from 'react';
import "../styles/homePage.css"
import HeaderComponent from "../components/HeaderComponent";
import routes from "./allRoutes"
import Button from "@material-ui/core/Button";
import HomeGridComponent from "../components/HomeGridComponent";

const homePage = (props) => {

    return(
        <div>
            <div className="page-top" >
                <HeaderComponent
                getHomePage = {() => routes.toHomePage(props.history)}
                getMarketPage = {() => routes.toMarketPage(props.history)} 
                getAboutPage =  {() => routes.toAboutPage(props.history)}></HeaderComponent>

                <div className = "home-intro">
                    
                    <div className= "intro-container">
                        <h1>Let's go circular</h1>
                        <h3>Make use of your waste</h3>
                        
                        <Button variant="contained" color="green" >Join now</Button>
                        {/* <Button variant = "contained">Login</Button>    */}
                    </div>
                </div>
            </div>

            <div className = "partners-list">
                   <h2>Logos of future partners</h2> 
            </div>
            
            <div className = "home-content">
                
                <p className="home-article">
                <h2>A noticable problem</h2>
                It can be noticed that consumers and companies are looking for the lowest price.
                Furthermore, recycled materials are often a bit less in quality. That means that
                a company is at risk based on quality and price when trying to work circular.
                So, the average company would ask themselves the question: why invest in recycling?  
                </p>

                <div style={{backgroundColor:  "rgb(235, 231, 231)"}}>
                    <p className="home-article">
                    <h2>Role of CTS</h2>
                Market principles will ensure that the textile economy will see high-quality recycling
                as solid material flows with more attention. The platform can match waste flow parties
                with the companies that apply to that waste flow (specific recyclers for specific waste).
                The right technology and a profitable business model still need to be developed for most
                of the circular textile economy. The platform should offer waste via sorting companies 
                to the market, because it would ultimately involve large quantities. By preparing the 
                sorting process with matching waste flows to current recycling companies, the platform
                creates an easy accessibility to specific waste. When a recycling company experiences
                a shortage in a specific waste flow or starts using a new combination of waste in their
                recycling process, sorting companies can be contacted. The platform has offers in materials
                other than a recycling company’s major material flows. The platform can help to provide
                a customer who requests a different composition with that recycled material.
                    </p>
                </div>

                <div className="home-article">
                    <HomeGridComponent></HomeGridComponent>
                </div>
                

            </div>
        </div>
    )
}

export default homePage;