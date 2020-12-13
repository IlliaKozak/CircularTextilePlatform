import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from '@material-ui/core';
import { useState } from 'react';


function FilerComponent (props) {

  const [checkBoxState, setCheckBoxState] = useState({

    Apparel: false,
    InteriorTextile: false,
    checkedOthers: false,
      
    Woven: false,
    Knitted: false,
    NonWoven: false
      
  })

  const handleChange = (event) => {
    setCheckBoxState({...checkBoxState, [event.target.name]: event.target.checked });

    if(event.target.checked == true) {
      props.filter (event.target.name)
    } 

    
    
  };

    return (
        <div>
          <div>
            <h5>Post-cosumer waste</h5>
            <FormGroup>
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.Apparel} onChange={handleChange} name="Apparel" type="waste_source"/>}
              label="Apparel"
              />
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.InteriorTextile} onChange={handleChange} name="Interior Textile"/>}
              label="Interior Textile"
              />
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.checkedOthers} onChange={handleChange} name="checkedOthers"/>}
              label="Others"
              />
            </FormGroup>
          </div>
          <div>
            <h5>Structure</h5>
            <FormGroup>
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.Woven} onChange={handleChange} name="Woven"/>}
              label="Woven"
              />
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.Knitted} onChange={handleChange} name="Knitted"/>}
              label="Knitted"
              />
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.checkedNonWoven} onChange={handleChange} name="checkedNonWoven"/>}
              label="Non-Woven"
              />
            </FormGroup>
          </div>
          
          
          
        </div>
        
    )

}

export default FilerComponent;