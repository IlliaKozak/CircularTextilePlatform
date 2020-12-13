import React, { Component } from 'react';
import axios from 'axios';
import routes from "../routes/allRoutes";
import OfferItemComponent from '../components/OfferItemComponent';
import HeaderComponent from "../components/HeaderComponent"
import FilterComponent from "../components/FilterComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import "../styles/marketPage.css";
import "../styles/homePage.css";
import {Grid, Button, TextField} from '@material-ui/core/';

class MarketPage extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            offersData: [],
            originalOffersData: [],
            searchQuery: '',
            search: window.location
    
        }
        this.filterOffers = this.filterOffers.bind(this) //???
        this.searchOffers = this.searchOffers.bind(this)
    }

    

    componentDidMount() { //getting data of all offers by via request to server.js
        axios.get('http://localhost:4321/getOffers').then((response) => {
            this.setState({
                offersData: response.data.data.offers,
                originalOffersData: response.data.data.offers})
            console.log(response)
        }) 
    }

    filterOffers (option_type) {
        let filteredOffers = []

        if (this.state.offersData.length == this.state.originalOffersData.length) {
            filteredOffers = this.state.offersData.filter(offer => offer.waste_structure === option_type)
            console.log(filteredOffers)
            this.setState({
            offersData: filteredOffers
            });
        } else {
            filteredOffers = this.state.originalOffersData.filter(offer => offer.waste_structure === option_type)
            console.log(filteredOffers)
            this.setState({
            offersData: this.state.offersData.concat(filteredOffers)
            });
        }
        
        console.log(this.state.offersData)
    }

    searchOffers(query) {
        let searchResults = []

        searchResults = this.state.originalOffersData.filter(offer => offer.offer_title.includes(query))
        this.setState({
            offersData: searchResults
        })
        console.log(searchResults)
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

                <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={9}>  
                                <SearchBarComponent/>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" onClick= {() => routes.toAddOfferPage(this.props.history)}>Add an offer</Button>
                            </Grid>
                        </Grid>

                
                <Grid container>
                    <Grid item xs={3}>
                        <div className="filters">
                        <FilterComponent filter = {this.filterOffers}></FilterComponent>
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