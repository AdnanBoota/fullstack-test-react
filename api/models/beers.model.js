const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Model = new Schema({
    name: { type: String, required: true, max: 100 },
    tagline: { type: String, required: true, max: 1000 },
},
    {
        versionKey: false, timestamps: true, collection: 'beers'
    });

// Export the model
module.exports = mongoose.model('Beers', Model);