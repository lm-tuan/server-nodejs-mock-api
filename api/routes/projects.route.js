
const express = require('express');
const ProjectController = require('./../controllers/projects.controller');
const middAuthCheck = require('./../../middwares/auth.middware');

const router = express.Router();

router.get('/',middAuthCheck.middlewareCheck, ProjectController.index);
module.exports = router;