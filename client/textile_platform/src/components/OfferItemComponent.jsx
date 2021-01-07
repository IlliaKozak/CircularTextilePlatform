import React from "react";
import "../styles/marketPage.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const offerItem = (props) => {
  const styling = {
    dispay: "inline-block",
    padding: "10px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    width: "250px",
  };

  const imageStyle = {
    borderRadius: "7px",
    width: "200px",
    height: "200px",
  };

  return (
    <Grid item xs={3}>
      <Paper style={styling} onClick={props.clicked}>
        <img src={props.image} style={imageStyle} alt="offer" />
        <div className="grid-item">
          <h5>{props.title}</h5>
          <p>Location: {props.location}</p>
        </div>
      </Paper>
    </Grid>
  );
};

export default offerItem;
