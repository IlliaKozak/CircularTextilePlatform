import React, { Component } from "react";
import axios from "axios";
import routes from "../routes/allRoutes";
import OfferItemComponent from "../components/OfferItemComponent";
import HeaderComponent from "../components/HeaderComponent";
import FilterComponent from "../components/FilterComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import "../styles/marketPage.css";
import "../styles/homePage.css";
import { Grid, Button } from "@material-ui/core/";

class MarketPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offersData: [],
      originalOffersData: [],
      searchQuery: "",
      search: window.location,
    };
    this.filterOffers = this.filterOffers.bind(this); //???
    this.searchOffers = this.searchOffers.bind(this);
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  componentDidMount() {
    //getting data of all offers by via request to server.js
    axios.get("http://localhost:4321/getOffers").then((response) => {
      this.setState({
        offersData: response.data.data.offers,
        originalOffersData: response.data.data.offers,
      });
      console.log(response);
    });
  }

  clearFilters() {
    this.componentDidMount();
  }

  filterOffers(option_type, option_name) {
    let filteredOffers = [];

    filteredOffers = this.state.offersData.filter(
      (offer) => offer[option_type] === option_name
    );
    this.setState({
      offersData: filteredOffers,
    });

    console.log(this.state.offersData);
  }

  setSearchQuery(value) {
    this.setState({
      searchQuery: value,
    });
  }

  searchOffers() {
    let searchResults = [];

    searchResults = this.state.originalOffersData.filter((offer) =>
      offer.offer_title.includes(this.state.searchQuery)
    );
    this.setState({
      offersData: searchResults,
    });
  }

  toSingleOffer = (offerId) => {
    //while moving to the page of chosen offers we are also passing an id of selected offer to render an element
    this.props.history.push({
      pathname: "getOffers/" + offerId,
      state: { id: offerId },
    });
  };

  render() {
    return (
      <div>
        <div className="market-top">
          <HeaderComponent
            getHomePage={() => routes.toHomePage(this.props.history)}
            getMarketPage={() => routes.toMarketPage(this.props.history)}
            getNewsPage={() => routes.toNewsPage(this.props.history)}
            getAboutPage={() => routes.toAboutPage(this.props.history)}
          ></HeaderComponent>

          <div className="market-intro">
            <h1>Search scrap</h1>
            <h5>
              Go ahead and find the fabrics you are looking for. We are sure
              that there are some beautiful leftover textiles waiting for you to
              be put back into life.
            </h5>
          </div>
        </div>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={9}>
            <SearchBarComponent
              searchQuery={this.state.searchQuery}
              setSearchQuery={this.setSearchQuery}
              searchOffers={this.searchOffers}
            />
          </Grid>
          <Grid item xs={3}>
            <button
              className="button-general"
              variant="contained"
              color="primary"
              onClick={() => routes.toAddOfferPage(this.props.history)}
            >
              ADD AN OFFER
            </button>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={3}>
            <div className="filters">
              <FilterComponent
                filter={this.filterOffers}
                clearFilters={this.clearFilters}
              ></FilterComponent>
            </div>
          </Grid>

          <Grid item xs={9}>
            <Grid container>
              {this.state.offersData.map((offer, key) => {
                return (
                  <OfferItemComponent
                    key={key}
                    image={offer.offer_image}
                    title={offer.offer_title}
                    location={offer.offer_location}
                    id={offer.offer_id}
                    clicked={() => this.toSingleOffer(offer.offer_id)}
                  ></OfferItemComponent>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MarketPage;
