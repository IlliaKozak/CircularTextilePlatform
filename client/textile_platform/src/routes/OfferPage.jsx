import React from "react";
//import PlatformAPI from "../platformAPI";
import axios from 'axios'
import OfferItemComponent from '../components/OfferItemComponent'
import HeaderComponent from '../components/HeaderComponent';
import { useState } from "react";
import { useEffect } from "react";



function OfferPage (props) {

    const [offerData, setOfferData] = useState({})

    
    
    //console.log(props.location.state.id)
    useEffect (() => {
        axios.get('http://localhost:4321/getOffers/' + props.location.state.id).then(response => {
            setOfferData(response.data.data.offers[0])

        })
    }) 


    console.log(offerData)

    return(
        <div>
            <HeaderComponent/>
            <p>Offer page</p> 
            <OfferItemComponent 
                    image = {offerData.offer_image}
                    title = {offerData.offer_title}
                    location = {offerData.offer_location}
            ></OfferItemComponent>
                    
        </div>
    )
}

export default OfferPage;

