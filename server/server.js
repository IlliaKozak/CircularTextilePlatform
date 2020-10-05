const express = require("express");
const morgan = require("morgan");
const database = require("./database");


const app = express();
require("dotenv").config();

const port = 4321;

app.use(morgan("dev")); // some 3rd-party middleware for more info during development

app.get("/getOffers", async (req, res) => {

    const offers = await database.query("SELECT * from offer");
    console.log(offers); 

    res.json({
        status: "success",
        data: {
            offers: ["first", "second"]
        }
    })
});

app.get("/getCompanies", async (req, res) => {

    const companies = await database.query("SELECT * from company");
    console.log(companies); 

    res.json({
        status: "success",
        data: {
            companies: ["recycleRes", "Something else"]
        }
    })
});

app.get("/getOffers/:id", (req, res) => {

})

app.listen(port, () => {
    console.log("I'm running on port " + port)
});