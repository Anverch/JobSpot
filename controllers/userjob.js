const db = require("../models")
module.exports = {
    // Get all jobs by user id
    getJobsByUser(req, params) {
        const userId = req.params.user_id;
        db.Job
            .findAll({
                where: { user_id: userId }
            })
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err))
    }
}