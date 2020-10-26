import React from "react";
//import PlatformAPI from "../platformAPI";
import axios from 'axios'
import OfferItem from '../OfferItem'



const offerPage = (props) => {

    
    let offerData = []
    
    //console.log(props.location.state.id)
    const getOfferData = () => {
        axios.get('http://localhost:4321/getOffers/'+props.location.state.id).then((response) => {
            offerData.push(response.data.data.offers[0])
        }) 

    } 
    getOfferData();

    console.log(offerData.get)

    return(
        <div>
            <p>Offer page</p> 
            <OfferItem 
                    title = {offerData}
                    overview = {offerData.offer_overview}
                     
                     ></OfferItem>
                    
        </div>
    )
}

export default offerPage;

