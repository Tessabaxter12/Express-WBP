const Eatery = require('../models/eatery');

module.exports = {
    index,
    show
};

function show(req, res) {
    const eatery = Eatery.getOne(req.params.id);
    res.render('eateries/show', { eatery });
}

function index(req, res) {
    const eateries = Eatery.getAll();
    res.render('eateries/index', { eateries });
}