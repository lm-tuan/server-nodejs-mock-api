const projects = require('../../mockapi/project-data');

module.exports.index = async (req, res, next ) => {
    res.json(projects);
}

