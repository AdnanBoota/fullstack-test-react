const Model = require('../models/beers.model');

exports.create = function (req, res) {
    let item = new Model(
        {
            name: req.body.name,
            types_id: req.body.types_id
        }
    );

    item.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Record Created successfully')
    })
};

exports.all = function (req, res) {
    // console.log(req.query.type);
    Model.find(req.query, function (err, item) {
        if (err) return next(err);
        res.send(item);
    })
};

exports.details = function (req, res) {
    Model.findById(req.params.id, function (err, item) {
        if (err) return next(err);
        res.send(item);
    })
};

exports.update = function (req, res) {
    Model.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, item) {
        if (err) return next(err);
        res.send('Record udpated.');
    });
};

exports.delete = function (req, res) {
    Model.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


exports.store = function (req, res) {
    // console.log(req.params.id);
    Model.find({ slug: req.params.id })
        .populate({ path: 'product_ids', model: 'Product' })
        // .populate({ path: 'places_id', model: 'Place' })
        // .populate('places_id')
        .exec((par, item) => {
            // console.log(par);
            console.log(item);
            // Place.find({ _id: item[0].places_id }).exec((r2, rest) => {
            //     console.log(rest[0]);
            //     // item[0] = rest[0];
            //     res.send({ business: item[0], place: rest[0] });

            // });
        });

};
