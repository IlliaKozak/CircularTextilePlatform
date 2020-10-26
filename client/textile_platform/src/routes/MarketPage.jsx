import React, { Component } from 'react';
import axios from 'axios';
import OfferItem from '../OfferItem';


class MarketPage extends Component  {

    state = {
        offersData: []

    }

    componentDidMount() { //getting data of all offers by via request to server.js
        axios.get('http://localhost:4321/getOffers').then((response) => {
            this.setState({offersData: response.data.data.offers})
        }) 
    }

    toSingleOffer = (offerId) => { //while moving to the page of chosen offers we are also passing an id of selected offer to render an element
        this.props.history.push({
            pathname: "getOffers/"+offerId,
            state: {id: offerId}});
    }

    render() {
    
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
                     clicked = {() => this.toSingleOffer(offer.offer_id)} ></OfferItem>
                    
                )
            })}
            </div>
        )

    }
    
}

export default MarketPage;