import React from "react";
import "../styles/homePage.css";
import "../styles/generalStyles.css";
import logo from "../images/Logo_darkgreen.png";
import Button from "@material-ui/core/Button";

export default function header({
  getHomePage,
  getMarketPage,
  getNewsPage,
  getAboutPage,
}) {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo"></img>
      </div>
      <div className="navigation-container">
        <button className="button-general" onClick={getHomePage}>
          HOME
        </button>
        <button className="button-general" onClick={getMarketPage}>
          MARKET
        </button>
        <button className="button-general" onClick={getNewsPage}>
          NEWS
        </button>
        <button className="button-general" onClick={getAboutPage}>
          ABOUT US
        </button>
      </div>
    </div>
  );
}
