
const express = require('express');
const NumbersController = require('./../controllers/numbers.controller');
const middAuthCheck = require('./../../middwares/auth.middware');

const router = express.Router();

router.get('/', middAuthCheck.middlewareCheck, NumbersController.index);
module.exports = router;