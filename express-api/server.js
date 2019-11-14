// app.js

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const axios = require("axios");

// Admin Panel
const beers = require('./routes/beers.route'); // Imports routes for the products

// Express
const app = express();
let port = 3001;
app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });
// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://localhost/beers';
let dev_db_url = 'mongodb+srv://admin:test123@cluster0-v6l8e.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



const Model = require("./models/beers.model");

// get all beers
const getBeers = async () => {
    try {
        return await axios.get("https://api.punkapi.com/v2/beers?per_page=80");
    } catch (error) {
        console.error(error);
    }
};

const crawlBeers = async () => {
    const breeds = await getBeers();
    breeds.data.forEach(element => {
        console.log(element.name);
        let item = new Model({
            id: element.id,
            name: element.name,
            tagline: element.tagline,
            first_brewed: element.first_brewed,
            description: element.description,
            image_url: element.image_url,
            abv: element.abv,
            ibu: element.ibu,
            target_fg: element.target_fg,
            target_og: element.target_og,
            ebc: element.ebc,
            srm: element.srm,
            ph: element.ph,
            attenuation_level: element.attenuation_level,
            volume: element.volume,
            boil_volume: element.boil_volume,
            method: element.method,
            ingredients: element.ingredients,
            food_pairing: element.food_pairing,
            brewers_tips: element.brewers_tips,
            contributed_by: element.contributed_by,
            // types_id: req.body.types_id
        });
        item.save(function (err) {
            if (err) {
                console.log(err);
                // return next(err);
            }
            console.log("Records Created successfully");
        });
    });
    //   console.log(breeds.data);
};

Model.find({}, function (err, item) {
    if (err) console.log('hello error ' + err);
    // res.send(item);
    if (item.length === 0)
        crawlBeers();
    // console.log('hello item ' + item.length);
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/beers', beers);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});