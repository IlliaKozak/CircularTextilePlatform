import React from "react";
import routes from "../routes/allRoutes";
import HeaderComponent from "../components/HeaderComponent";
import { Grid } from "@material-ui/core/";
import "../styles/generalStyles.css";
import "../styles/aboutPage.css";

const aboutPage = (props) => {
  return (
    <div>
      <div className="header-background">
        <HeaderComponent
          getHomePage={() => routes.toHomePage(props.history)}
          getMarketPage={() => routes.toMarketPage(props.history)}
          getNewsPage={() => routes.toNewsPage(props.history)}
          getAboutPage={() => routes.toAboutPage(props.history)}
        ></HeaderComponent>

        <Grid container>
          <Grid item xs={7}></Grid>

          <Grid item xs={3}>
            <div className="header-text">
              <h3>About CTS</h3>
              <p>
                An online platform to connect companies within the circular
                textile supply chain.{" "}
              </p>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="main-article">
        <h4>We are CTS - Circular Textile Solutions. </h4>
        <p>
          Circular Textile Solutions supports you to create locally based
          textile networks and to find a logical transition between your
          company’s textile waste, sorting and recycling companies, or the other
          way around - as we said: circularity is key.{" "}
        </p>
        <p>
          Our mission is to make textile waste valuable and high qualitative
          again. We want to create awareness that textile waste is a regular
          material which should get the chance to have the same status as virgin
          materials.
        </p>
        <p>
          We believe that we are not the only ones having this vision in mind,
          so let’s connect, let’s bring textile waste to the market and let’s
          work on Circular Textile Solutions, through this platform.{" "}
        </p>
        <p>
          As Circularity predicts - there is never an ending. There is always
          room for new ideas and ways to go and we are happy to go on this
          journey together with you, as one community.{" "}
        </p>
      </div>

      <div className="main-article">
        <h4>About the research group Sustainable and Functional Textiles </h4>
        <p>
          The mastermind behind the platform is the Saxion research group
          Sustainable and Functional Textiles (SFT). The most important research
          areas of the SFT research group are: sustainable textiles, responsive
          smart textiles and surface modification.
        </p>
        <p>
          The research group is also actively engaged in multidisciplinary
          collaboration with companies, researchers and students. This
          collaboration takes place at the regional, national and international
          level. As result, innovative concepts and products are being
          developed.
        </p>
      </div>
    </div>
  );
};

export default aboutPage;
