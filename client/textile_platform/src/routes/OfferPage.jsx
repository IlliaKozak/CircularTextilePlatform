import React from "react";
import { useState, useEffect } from "react";
import "../styles/offerPage.css";
import logo from "../images/Logo_darkgreen.png";
import HeaderComponent from "../components/HeaderComponent";
import routes from "../routes/allRoutes";
import axios from "axios";
import { Grid, Divider } from "@material-ui/core/";

function OfferPage(props) {
  const [offerData, setOfferData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4321/getOffers/" + props.location.state.id)
      .then((response) => {
        setOfferData(response.data.data.offers[0]);
      });
  }, offerData); //no re-call until 'offerData' will be changed

  return (
    <div>
      <div className="offer-top">
        <HeaderComponent
          getHomePage={() => routes.toHomePage(props.history)}
          getMarketPage={() => routes.toMarketPage(props.history)}
          getNewsPage={() => routes.toNewsPage(props.history)}
          getAboutPage={() => routes.toAboutPage(props.history)}
        />

        <Grid container className="intro-top">
          <Grid item xs={6}>
            <img
              src={offerData.offer_image}
              className="offer-image"
              alt="offer_image"
            />
          </Grid>

          <Grid item xs={6}>
            <h1>{offerData.offer_title}</h1>
          </Grid>
        </Grid>
      </div>

      <div className="offer-info">
        <Grid container className="grid">
          <Grid item xs={6}>
            <div className="data-form">
              <p>Waste source: {offerData.waste_source} </p>
              <Divider />
              <p>Quanitity: {offerData.quantity} kg </p>
              <Divider />
              <p>Waste type: {offerData.waste_type} </p>
              <Divider />
              <p>Waste structure: {offerData.waste_structure} </p>
              <Divider />
              <p>Waste colour: {offerData.waste_colour} </p>
              <Divider />
              <p>Waste composition: {offerData.composition} </p>
              <Divider />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="company-form">
              <div>
                <img src={logo} className="company-logo" alt="logo"></img>
              </div>
              <p>Company name: N\A</p>
              <Divider />
              <p>Company type: N\A</p>
              <Divider />
              <p>Location: {offerData.offer_location}</p>
              <Divider />
              <p>Contact us: {offerData.contact_details}</p>
              <Divider />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default OfferPage;
