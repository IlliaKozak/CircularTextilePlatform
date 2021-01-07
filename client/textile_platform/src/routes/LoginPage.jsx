import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import allRoutes from "./allRoutes";
import logo from "../images/Logo_darkgreen.png";
import axios from "axios";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = {
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    marginTop: "100px",
  };

  const inputCheck = async () => {
    await axios.get("http://localhost:4321/getCompanies/").then((response) => {
      let companies = response.data.data.companies;

      for (let i = 0; i < companies.length; i++) {
        if (
          companies[i].company_email === username &&
          companies[i].password === password
        ) {
          allRoutes.toHomePage(props.history);
          return;
        }
      }

      alert("Credentials are not correct");
    });
  };

  return (
    <div style={{ backgroundColor: " #c2d3cd", height: "750px" }}>
      <img src={logo} alt="logo" style={imageStyle} />
      <h3>Welcome back!</h3>
      <div style={loginForm}>
        <TextField
          required
          variant="outlined"
          label="Email"
          onInput={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={loginForm}>
        <TextField
          required
          variant="outlined"
          label="Password"
          type="password"
          onInput={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="button-general"
        style={{ backgroundColor: "#698878" }}
        onClick={() => inputCheck()}
      >
        LOGIN
      </button>
    </div>
  );
}

export default LoginPage;
