import React, { Component } from 'react';
import axios from 'axios';
import OfferItem from '../OfferItem';
import {useHistory} from 'react-router-dom';


class MarketPage extends Component  {


    state = {
        offersData: []

    }


    componentDidMount() {
        axios.get('http://localhost:4321/getOffers').then((response) => {
            this.setState({offersData: response.data.data.offers})
        }) 

    }

    

    


    render() {
        //const history = useHistory();

        // const toSingleOffer = () => {
        //     history.push("/2");
        // }
            console.log(this.state.offersData)

        return (
            <div>
                Market Page
    
            {this.state.offersData.map((offer, key)=> {
                return(
                    <OfferItem key = {key} 
                    title = {offer.offer_title}
                    overview = {offer.offer_overview}
                     id = {offer.offer_id}
                    /*  clicked = {() => toSingleOffer()} */></OfferItem>
                    
                )
            })}
            </div>
        )

    }

    
}

export default MarketPage;