const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Model = new Schema({
    name: { type: String, required: true, max: 100 },
    tagline: { type: String, required: true, max: 1000 },
    first_brewed: { type: String, required: true, max: 1000 },
    description: { type: String, required: true, max: 2000 },
    image_url: { type: String, required: true, max: 1000 },
    abv: { type: String, required: true, max: 1000 },
    ibu: { type: String, required: true, max: 1000 },
    target_fg: { type: String, required: true, max: 1000 },
    target_og: { type: String, required: true, max: 1000 },
    ebc: { type: String, required: true, max: 1000 },
    srm: { type: String, required: true, max: 1000 },
    ph: { type: String, required: true, max: 1000 },
    attenuation_level: { type: String, required: true, max: 1000 },
    volume: Schema.Types.Mixed,
    boil_volume: Schema.Types.Mixed,
    method: Schema.Types.Mixed,
    ingredients: Schema.Types.Mixed,
    food_pairing: Schema.Types.Mixed,
    brewers_tips: { type: String, required: true, max: 1000 },
    contributed_by: { type: String, required: true, max: 1000 },
},
    {
        versionKey: false, timestamps: true, collection: 'beers'
    });

// Export the model
module.exports = mongoose.model('Beers', Model);