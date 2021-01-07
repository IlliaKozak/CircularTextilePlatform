import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import routes from "./allRoutes";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
  Button,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core/";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useState } from "react";
import axios from "axios";
import "../styles/generalStyles.css";

function AddOffer(props) {
  const [openDescription, setOpenDesciption] = useState(false);

  const handleClickOpen = () => {
    setOpenDesciption(true);
  };

  const handleClose = () => {
    setOpenDesciption(false);
  };

  const [offer, setOffer] = useState({
    offer_title: "",
    offer_location: "",
    quantity: 1,
    waste_source: "",
    waste_type: "",
    waste_structure: "",
    waste_colour: "",
    composition: "",
    contact_details: "",
    offer_image: "",
  });

  const formStyle = {
    width: "250px",
    margin: "50px",
  };

  const handleChange = (event) => {
    setOffer({
      ...offer,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    setOffer({
      ...offer,
      offer_image: event.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    if (offer.offer_title == "" || offer.offer_image == "") {
      return alert("Please fill in all text fields");
    } else {
      try {
        const fd = new FormData();
        fd.append("offer_title", offer.offer_title);
        fd.append("offer_location", offer.offer_location);
        fd.append("quantity", offer.quantity);
        fd.append("waste_source", offer.waste_source);
        fd.append("waste_type", offer.waste_type);
        fd.append("waste_structure", offer.waste_structure);
        fd.append("waste_colour", offer.waste_colour);
        fd.append("contact_details", offer.contact_details);
        fd.append("offer_image", offer.offer_image, offer.offer_image.name);
        fd.append("composition", offer.composition);

        console.log(fd);
        console.log(offer.offer_image);
        const response = await axios.post(
          "http://localhost:4321/createOffer",
          fd,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (err) {
        console.log(err);
      }

      return alert("Item was created");
    }
  };

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
          <Grid item xs={7}>
            <h1>Offer scraps</h1>
          </Grid>

          <Grid item xs={3}>
            <p>
              Offer (processed) scrap to recycling or processing companies. To
              add a scrap offer to the platform, please fill in the following
              information
            </p>
          </Grid>
        </Grid>
      </div>

      <div>
        <FormControl>
          <h4>1. Offer title</h4>
          <TextField
            required
            onChange={handleChange}
            name="offer_title"
            label="Title"
            variant="outlined"
          />
        </FormControl>
      </div>

      <div>
        <div>
          <FormControl required style={formStyle}>
            <InputLabel>Type</InputLabel>
            <Select
              value={offer.waste_type}
              onChange={handleChange}
              name="waste_type"
            >
              <MenuItem value={"Fabric scraps"}>Fabric scraps</MenuItem>
              <MenuItem value={"Apparel"}>Apparel</MenuItem>
              <MenuItem value={"Yarns"}>Yarns</MenuItem>
              <MenuItem value={"Interior textile"}>Interior textile</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <FormControl required style={formStyle}>
            <InputLabel>Source</InputLabel>
            <Select
              value={offer.waste_source}
              onChange={handleChange}
              name="waste_source"
            >
              <MenuItem value={"Pre-consumer"}>Pre-consumer</MenuItem>
              <MenuItem value={"Post-consumer"}>Post-consumer</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <FormControl required style={formStyle}>
            <InputLabel>Structure</InputLabel>
            <Select
              value={offer.waste_structure}
              onChange={handleChange}
              name="waste_structure"
            >
              <MenuItem value={"Woven"}>Woven</MenuItem>
              <MenuItem value={"Knitted"}>Knitted</MenuItem>
              <MenuItem value={"Non-woven"}>Non-woven</MenuItem>
              <MenuItem value={"Not applicable"}>Not applicable</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <FormControl required style={formStyle}>
            <InputLabel>Colour</InputLabel>
            <Select
              value={offer.waste_colour}
              onChange={handleChange}
              name="waste_colour"
            >
              <MenuItem value={"Light-coloured"}>Light-coloured</MenuItem>
              <MenuItem value={"Dark-coloured"}>Dark-coloured</MenuItem>
              <MenuItem value={"Mixed"}>Mixed</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </div>

        <TextField
          style={formStyle}
          label="With normal TextField"
          name="quantity"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          }}
          onChange={handleChange}
          variant="outlined"
        />

        <FormControl style={formStyle}>
          <TextField
            required
            onChange={handleChange}
            name="composition"
            label="Composition"
            variant="outlined"
          />
          <FormHelperText>
            example: Cotton - 30%, Polyester - 70%
          </FormHelperText>
        </FormControl>

        <FormControl required style={formStyle}>
          <InputLabel>Location</InputLabel>
          <Select
            value={offer.offer_location}
            onChange={handleChange}
            name="offer_location"
          >
            <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
            <MenuItem value={"Germany"}>Germany</MenuItem>
            <MenuItem value={"Sweden"}>Sweden</MenuItem>
            <MenuItem value={"Poland"}>Poland</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>

        <FormControl style={formStyle}>
          <TextField
            required
            onChange={handleChange}
            name="contact_details"
            label="Email"
            variant="outlined"
          />
        </FormControl>

        <form enctype="multipart/form-data" method="post">
          <input type="file" name="offer_image" onChange={handleImageChange} />
          <HelpOutlineIcon onClick={handleClickOpen} />
          <Dialog open={openDescription} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
              Before uploading the photo, please make sure that:
            </DialogTitle>
            <DialogContent>
              <p>
                1. The photo has a good resolution: it’s not blurry and
                pixelated, but clear and sharp.
              </p>
              <p>2. It’s ca. 100KB, between 150 - 250dpi (Dots per Inch)</p>
              <p>
                3. The photo is in colour It shows a close-up of the offered
                textiles (if possible)
              </p>
              <p>4. Check the photos of current offers as an example</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </form>

        <div style={{ margin: "40px" }}>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddOffer;
