import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../styles/homePage.css"

const homeGrid = () => {

  return(
    <div>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Paper style={{backgroundColor: "rgb(235, 231, 231)"}}>
            <h2>1. Sign up</h2>
            <p className="grid-article">
            Companies need to have an account on the platform and have
            to fill in a register form. This will include the VAT number of the companies.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{backgroundColor: "rgb(179, 231, 188)"}}>
            <h2>2. Find a partner</h2>
            <p className="grid-article">
            The platform is developed to match supply and demand of textile waste.
            The companies participating could be textile waste suppliers, textile
            recycling companies and textile buyers (clothing companies, automotive industry etc).
            </p>
          </Paper>
        </Grid >
        <Grid item xs={4}>
          <Paper style={{backgroundColor: "rgb(235, 231, 231)"}}>
            <h2>3. Contact</h2>
            <p className="grid-article">
            The platform makes it possible for companies to get in touch with other
            companies to exchange services. This contact should be personal and reliable.
            The platform only exchanges contact information, it is not a commercial
            platform. No transactions will take place. Until further business model is made.  
            </p>
          </Paper>
        </Grid>
        
        </Grid>
    </div>
  )
}

export default homeGrid;