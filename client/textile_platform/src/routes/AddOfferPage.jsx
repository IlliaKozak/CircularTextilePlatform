import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import routes from './allRoutes';
import {Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField, Button} from '@material-ui/core/';
import { useState } from 'react';
import axios from 'axios';

function AddOffer (props) {

    const [offer, setOffer] = useState({
        offer_title: '',
        offer_overview: 'bla',
        offer_location: '',
        quantity: 1,
        waste_source: '',
        waste_type: '',
        waste_structure: '',
        waste_colour: '',
        contact_details: ''
    })

    const formStyle = {
        width: '250px'
    }

    const handleChange = (event) => {
        setOffer({
           ...offer,
           [event.target.name]: event.target.value,
            
        });
      };

    const handleSubmit = async () => {
        try{
            const response = await axios.post('http://localhost:4321/createOffer', {
                
                offer_title: offer.offer_title,
                offer_overview: offer.offer_overview,
                offer_location: offer.offer_location,
                quantity: offer.quantity,
                waste_source: offer.waste_source,
                waste_type: offer.waste_type,
                waste_structure: offer.waste_structure,
                waste_colour: offer.waste_colour,
                contact_details: offer.contact_details
        });
            console.log(response)
        } catch(err) {
            console.log(err)
        }
        
    }

    return (
        <div>
            <div style={{backgroundColor: '#bdbdbd', marginBottom: '50px' }}> 
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

            <div>
                <FormControl >
                    <h4>1. Offer title</h4>
                    <TextField required
                    onChange={handleChange}
                    name="offer_title"  label="Title" variant="outlined" />
                </FormControl>
            </div>

            <div>
                <div>
                    <FormControl required style={formStyle}>

                        <InputLabel >Type</InputLabel>
                            <Select
                            value={offer.waste_type}
                            onChange={handleChange}
                            name="waste_type"
                            >
                                <MenuItem value={'Fabric scraps'}>Fabric scraps</MenuItem>
                                <MenuItem value={'Apparel'}>Apparel</MenuItem>
                                <MenuItem value={'Yarns'}>Yarns</MenuItem>
                                <MenuItem value={'Home textile'}>Home textile</MenuItem>
                            </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>

                <div>
                    <FormControl required style={formStyle}>
                        <InputLabel >Source</InputLabel>
                            <Select
                            value={offer.waste_source}
                            onChange={handleChange}
                            name="waste_source"
                            >
                                <MenuItem value={'Pre-consumer'}>Pre-consumer</MenuItem>
                                <MenuItem value={'Post-consumer'}>Post-consumer</MenuItem>
                            </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>

                <div>
                    <FormControl required style={formStyle}>
                        <InputLabel >Structure</InputLabel>
                            <Select
                            value={offer.waste_structure}
                            onChange={handleChange}
                            name="waste_structure"
                            >
                                <MenuItem value={'Woven'}>Woven</MenuItem>
                                <MenuItem value={'Knitted'}>Knitted</MenuItem>
                                <MenuItem value={'Non-woven'}>Non-woven</MenuItem>
                                <MenuItem value={'Not applicable'}>Not applicable</MenuItem>
                            </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>

                <div>
                    <FormControl required style={formStyle}>
                        <InputLabel >Colour</InputLabel>
                            <Select
                            value={offer.waste_colour}
                            onChange={handleChange}
                            name="waste_colour"
                            >
                                <MenuItem value={'Light-coloured'}>Light-coloured</MenuItem>
                                <MenuItem value={'Dark-coloured'}>Dark-coloured</MenuItem>
                                <MenuItem value={'Mixed'}>Mixed</MenuItem>
                            </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>

                <div>
                    <FormControl required style={formStyle}>
                        <InputLabel >Location</InputLabel>
                            <Select
                            value={offer.offer_location}
                            onChange={handleChange}
                            name="offer_location"
                            >
                                <MenuItem value={'Netherlands'}>Netherlands</MenuItem>
                                <MenuItem value={'Germany'}>Germany</MenuItem>
                                <MenuItem value={'Sweden'}>Sweden</MenuItem>
                                <MenuItem value={'Poland'}>Poland</MenuItem>
                            </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>

                <div>
                <div>
                    <FormControl >
                        <TextField required
                        onChange={handleChange}
                        name="contact_details"  label="Email" variant="outlined" />
                    </FormControl>
                </div>
            </div>

            <div>
                <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">Submit</Button> 
            </div>
         

            
            </div>
        </div>
    )
}

export default AddOffer;
