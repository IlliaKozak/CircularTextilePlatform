const express = require("express");
const database = require("./database");
const cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");

const app = express();


const port = 4321;

app.use(express.json()) //offer body that we are sending will be attached to 'req' so we can access it
app.use(cors());

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './upload/');

//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)

//     }
// })

//const upload = multer({storage: storage});



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });

    const storageCloudinary = new CloudinaryStorage ({
    cloudinary: cloudinary,
    folder: "textile platform",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 200, height: 200, crop: "limit" }]
    });

    const parser = multer({ storage: storageCloudinary });


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

app.post("/createOffer", parser.single('offer_image'), async (req, res) => {

    console.log(req.body)
    console.log(req.body.offer_title)
    console.log(req.file.path)

    console.log(req.file)
    try {
        const result  = await database.query(
        "INSERT INTO offer (offer_title, offer_location, quantity, waste_source, waste_type, waste_structure, waste_colour, contact_details, offer_image) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *", 
        [req.body.offer_title, req.body.offer_location, req.body.quantity, req.body.waste_source, req.body.waste_type, req.body.waste_structure, req.body.waste_colour, req.body.contact_details, req.file.path]
       // ["some test title", "req.body.offer_location", req.body.quantity, "req.body.waste_source", "req.body.waste_type", "req.body.waste_structure", "req.body.waste_colour", "req.body.contact_details", "req.file.url"]
        )
        res.status(201).json({
            status: "success",
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