import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { useState } from "react";

function FilerComponent(props) {
  const [checkBoxState, setCheckBoxState] = useState({
    "Fabric scraps": false,
    Yarns: false,

    Apparel: false,
    "Interior textile": false,
    Others: false,

    Woven: false,
    Knitted: false,
    "Non-woven": false,

    "Light-coloured": false,
    "Dark-coloured": false,

    Netherlands: false,
    Germany: false,
    Sweden: false,
    Poland: false,
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    setCheckBoxState({
      ...checkBoxState,
      [event.target.name]: event.target.checked,
    });

    if (event.target.checked == true) {
      props.filter(event.target.id, event.target.name);
    }
  };

  const resetFilters = () => {
    setCheckBoxState({
      checkBoxState: false,
    });
    props.clearFilters();
  };

  return (
    <div>
      <button
        className="button-general"
        style={{ backgroundColor: "#698878", marginBottom: "15px" }}
        variant="contained"
        onClick={resetFilters}
      >
        CLEAR FILTERS
      </button>
      <div>
        <h5>Pre-consumer waste</h5>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                // checked={checkBoxState.Apparel}
                onChange={handleChange}
                name="Fabric scraps"
                id="waste_type"
              />
            }
            label="Fabric scraps"
          />
          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} name="Yarns" id="waste_type" />
            }
            label="Yarns"
          />
        </FormGroup>
      </div>
      <div>
        <h5>Post-consumer waste</h5>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkBoxState.Apparel}
                onChange={handleChange}
                name="Apparel"
                id="waste_type"
              />
            }
            label="Apparel"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkBoxState.InteriorTextile}
                onChange={handleChange}
                name="Interior textile"
                id="waste_type"
              />
            }
            label="Interior textile"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkBoxState.Others}
                onChange={handleChange}
                name="Others"
                id="waste_type"
              />
            }
            label="Others"
          />
        </FormGroup>
      </div>
      <div>
        <h5>Colour</h5>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                id="waste_colour"
                onChange={handleChange}
                name="Light-coloured"
              />
            }
            label="Light-coloured"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="waste_colour"
                onChange={handleChange}
                name="Dark-coloured"
              />
            }
            label="Dark-coloured"
          />
        </FormGroup>
      </div>
      <div>
        <h5>Structure</h5>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                id="waste_structure"
                checked={checkBoxState.Woven}
                onChange={handleChange}
                name="Woven"
              />
            }
            label="Woven"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="waste_structure"
                checked={checkBoxState.Knitted}
                onChange={handleChange}
                name="Knitted"
              />
            }
            label="Knitted"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="waste_structure"
                // checked={checkBoxState.checkedNonWoven}
                onChange={handleChange}
                name="Non-woven"
              />
            }
            label="Non-woven"
          />
        </FormGroup>
      </div>

      <div>
        <h5>Location</h5>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                id="offer_location"
                checked={checkBoxState.Netherlands}
                onChange={handleChange}
                name="Netherlands"
              />
            }
            label="Netherlands"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="offer_location"
                checked={checkBoxState.Germany}
                onChange={handleChange}
                name="Germany"
              />
            }
            label="Germany"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="offer_location"
                checked={checkBoxState.Sweden}
                onChange={handleChange}
                name="Sweden"
              />
            }
            label="Sweden"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="offer_location"
                checked={checkBoxState.Poland}
                onChange={handleChange}
                name="Poland"
              />
            }
            label="Poland"
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default FilerComponent;
