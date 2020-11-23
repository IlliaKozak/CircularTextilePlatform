const express = require("express");
//const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");

const app = express();
require("dotenv").config();

const port = 4321;

app.use(express.json()) //offer body that we are sending will be attached to 'req' so we can access it

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

app.post("/createOffer", async (req, res) => {

    
    try {
        const result  = await database.query(
        "INSERT INTO offer (offer_title, offer_overview, offer_location, quantity, waste_source, waste_type, waste_structure, waste_colour, contact_details) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)", 
        [req.body.offer_title, req.body.offer_overview, req.body.offer_location, req.body.quantity, req.body.waste_source, req.body.waste_type, req.body.waste_structure, req.body.waste_colour, req.body.contact_details])
        res.status(201).json({
            status: "success"
            ,
            data: {
                offers: result.rows
            }
        })
    } catch(err) {
        console.log(err)
    }

})

app.listen(port, () => {
    console.log("I'm running on port " + port)
});