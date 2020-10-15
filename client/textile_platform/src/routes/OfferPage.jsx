import React from "react";
//import PlatformAPI from "../platformAPI";
import axios from 'axios'



const offerPage = () => {

    
   // const offerData: []
    

    const getOfferData = () => {
        axios.get('http://localhost:4321/getOffers').then((response) => {
            this.setState({offersData: response.data.data.offers})
        }) 

    }

    

    return(
        <div>
            
            Offer page 
        </div>
    )
}

export default offerPage;

