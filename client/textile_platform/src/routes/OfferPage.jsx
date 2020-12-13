import React from "react";
import { useState, useEffect } from "react";
//import PlatformAPI from "../platformAPI";
import "../styles/marketPage.css"
import "../styles/offerPage.css"
import HeaderComponent from '../components/HeaderComponent';
import routes from "../routes/allRoutes";
import axios from 'axios'
import {Grid, Divider} from '@material-ui/core/';



function OfferPage (props) {

    const [offerData, setOfferData] = useState({})

    //console.log(props.location.state.id)
   
     useEffect(() => {
        axios.get('http://localhost:4321/getOffers/' + props.location.state.id).then(response => {
            setOfferData(response.data.data.offers[0])

        })

     }, offerData) //no re-call until 'offerData' will be changed
    

    return(
        <div>
            <div className="offer-top">
                <HeaderComponent 
                getHomePage = {() => routes.toHomePage(props.history)}
                getMarketPage = {() => routes.toMarketPage(props.history)} 
                getAboutPage =  {() => routes.toAboutPage(props.history)}/>
                <div className = "home-intro">
                        <div className= "intro-container">
                        <h1>{offerData.offer_title}</h1>
                        </div>   
                </div>
            </div>

            <div className="offer-form">
                <Grid container className="grid">
                    <Grid item xs={5}>
                        <img src={offerData.offer_image} className="offer-image" alt="offer_image"/>

                    </Grid>

                    <Grid item xs={7}>
                        <div className="data-form">
                            <h3>{offerData.offer_title}</h3>
                            <Divider/>
                            <p>Quanitity: {offerData.quantity} kg </p>
                            <Divider/>
                            <p>Waste source: {offerData.waste_source} </p>
                            <Divider/>
                            <p>Waste type: {offerData.waste_type} </p>
                            <Divider/>
                            <p>Waste structure: {offerData.waste_structure} </p>
                            <Divider/>
                            <p>Waste colour: {offerData.waste_colour} </p>
                            <Divider/>
                            <p>Waste composition: {offerData.composition} </p>
                            <Divider/>
                            <p>Waste type: {offerData.waste_type} </p>
                            <Divider/>
                            <p>Location: {offerData.offer_location}</p>
                            <Divider/>
                        </div>
                            
                            
                        
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default OfferPage;

