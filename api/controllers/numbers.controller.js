const phone_numbers = require('../../mockapi/phone-data');

module.exports.index = async (req, res, next ) => {
    res.json(phone_numbers);
}

