const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

let Model = new Schema({
    name: { type: String, required: true, max: 100 },
    tagline: { type: String, required: true, max: 1000 },
    first_brewed: { type: String, required: true, max: 1000 },
    description: { type: String, required: true, max: 2000 },
    image_url: { type: String, required: true, max: 1000 },
    abv: { type: Number },
    ibu: { type: Number },
    target_fg: { type: Number },
    target_og: { type: Number },
    ebc: { type: Number },
    srm: { type: Number },
    ph: { type: Number },
    attenuation_level: { type: Number },
    volume: Schema.Types.Mixed,
    boil_volume: Schema.Types.Mixed,
    method: Schema.Types.Mixed,
    ingredients: Schema.Types.Mixed,
    food_pairing: Schema.Types.Mixed,
    brewers_tips: { type: String, required: true, max: 3000 },
    contributed_by: { type: String, required: true, max: 1000 },
},
    {
        versionKey: false, timestamps: true, collection: 'beers'
    });

Model.plugin(mongoosePaginate);
// Export the model
module.exports = mongoose.model('Beers', Model);