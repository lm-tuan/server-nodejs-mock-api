const phones = require('../../mockapi/phone-data');

module.exports.index = async (req, res, next ) => {
    res.json(phones);
}

