const db = require("../models")

module.exports = {
    getJobs(req, res) {
        db.Job 
        .findAll()
        .then(dbJob => res.json(dbJob))
        .catch(err => res.status(422).json(err))
    }
}