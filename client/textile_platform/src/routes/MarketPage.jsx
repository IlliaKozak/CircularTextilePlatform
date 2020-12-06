import React, { Component } from 'react';
import axios from 'axios';
import routes from "../routes/allRoutes";
import OfferItemComponent from '../components/OfferItemComponent';
import HeaderComponent from "../components/HeaderComponent"
import FilterComponent from "../components/FilterComponent";
import "../styles/marketPage.css";
import "../styles/homePage.css";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";


class MarketPage extends Component  {

    state = {
        offersData: []

    }

    componentDidMount() { //getting data of all offers by via request to server.js
        axios.get('http://localhost:4321/getOffers').then((response) => {
            this.setState({offersData: response.data.data.offers})
            console.log(response)
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
                <div className="market-top">
                    <HeaderComponent
                getHomePage = {() => routes.toHomePage(this.props.history)}
                getMarketPage = {() => routes.toMarketPage(this.props.history)} 
                getAboutPage =  {() => routes.toAboutPage(this.props.history)}></HeaderComponent>

                    <div className = "home-intro">
                        <div className= "intro-container">
                            <h1>Search scrap</h1>
                            <h3>Make use of your waste</h3> 
                        </div>   
                    </div>
                </div>

                <Button variant="contained" color="primary" onClick= {() => routes.toAddOfferPage(this.props.history)}>Add an offer</Button>
                
                <Grid container>
                    <Grid item xs={3}>
                        <div className="filters">
                        <FilterComponent></FilterComponent>
                        </div>
                    </Grid>

                    <Grid item xs = {9}>
                        <Grid container>
                            {this.state.offersData.map((offer, key)=> {
                            return(
                                <OfferItemComponent key = {key} 
                                image = {offer.offer_image}
                                title = {offer.offer_title}
                                overview = {offer.offer_overview}
                                location = {offer.offer_location}
                                id = {offer.offer_id}
                                clicked = {() => this.toSingleOffer(offer.offer_id)} ></OfferItemComponent>
                            )
                            })}
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        )

    }
    
}

export default MarketPage;