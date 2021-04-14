
const express = require('express');
const PhonesController = require('./../controllers/phones.controller');
const middAuthCheck = require('./../../middwares/auth.middware');

const router = express.Router();

router.get('/',middAuthCheck.middlewareCheck, PhonesController.index);
module.exports = router;