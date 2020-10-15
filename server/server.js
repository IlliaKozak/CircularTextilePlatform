const express = require("express");
//const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");

const app = express();
require("dotenv").config();

const port = 4321;

//app.use(morgan("dev")); // some 3rd-party middleware for more info during development
app.use(cors());

app.get("/getOffers", async (req, res) => {

    const offers = await database.query("SELECT * from offer");
    console.log(offers); 

    res.json({
        status: "success",
        results: offers.rows.length,
        data: {
            offers: offers.rows
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

app.get("/getOffers/:id", async (req, res) => {
    console.log("Chosen ID: " + req.params.id); //getting an id that was requested in a URL

    const offers = await database.query("SELECT * from offer WHERE offer_id = $1", [req.params.id] );
    //parametrized query to avoid SQL injections, char after $ is replaced with an id

    res.json({
        status: "success",
        data: {
            offers: offers.rows
        }
    })

})

app.listen(port, () => {
    console.log("I'm running on port " + port)
});