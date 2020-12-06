import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from '@material-ui/core';
import { useState } from 'react';


function FilerComponent () {

  const [checkBoxState, setCheckBoxState] = useState({
      checkedApparel: false,
      checkedInteriorTextile: false,
      checkedOthers: false,

      checkedWoven: false,
      checkedKnitted: false,
      checkedNonWoven: false
      
  })


  const handleChange = (event) => {
    setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
  };

    return (
        <div>
          <div>
            <h5>Post-cosumer waste</h5>
            <FormGroup>
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.checkedApparel} onChange={handleChange} name="checkedApparel"/>}
              label="Apparel"
              />
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.checkedInteriorTextile} onChange={handleChange} name="checkedInteriorTextile"/>}
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
              control={<Checkbox checked={checkBoxState.checkedWoven} onChange={handleChange} name="checkedWoven"/>}
              label="Woven"
              />
              <FormControlLabel
              control={<Checkbox checked={checkBoxState.checkedKnitted} onChange={handleChange} name="checkedKnitted"/>}
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