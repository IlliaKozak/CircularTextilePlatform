import React from 'react';
import routes from '../routes/allRoutes';
import HeaderComponent from "../components/HeaderComponent"


const aboutPage = (props) => {

    return (
        <div>
            <HeaderComponent
                getHomePage = {() => routes.toHomePage(props.history)}
                getMarketPage = {() => routes.toMarketPage(props.history)} 
                getAboutPage =  {() => routes.toAboutPage(props.history)}></HeaderComponent>
        </div>
    )

}

export default aboutPage;