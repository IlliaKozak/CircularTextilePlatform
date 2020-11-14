import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import routes from './allRoutes';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

function AddOffer (props) {

    const [offer, setOffer] = useState({
        name: ""
    })

    
    return (
        <div>
            <div style={{backgroundColor: '#bdbdbd'}}>
                <HeaderComponent
                getHomePage = {() => routes.toHomePage(props.history)}
                getMarketPage = {() => routes.toMarketPage(props.history)} 
                getAboutPage =  {() => routes.toAboutPage(props.history)}>
                </HeaderComponent>

                <Grid container>
                    <Grid item xs={7}>
                        <h1>Offer scraps</h1>
                    </Grid>

                    <Grid item xs={3}>
                        <p>Offer (processed) scrap to recycling or processing companies. 
                        To add a scrap offer to the platform, please fill in the following information</p>
                    </Grid>
                </Grid>
            </div>
        </div>


    )


}

export default AddOffer;
