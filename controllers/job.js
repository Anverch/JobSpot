const db = require("../models")

module.exports = {
    getJobs(req, res) {
        db.Job
            .findAll()
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err));
    },
    getJobsByUser(req, res) {
        userId = req.params.id;
        db.Job
            .findAll({
                where: {
                    user_id: userId
                }
            })
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err));
    },
    createJob(req, res) {
        db.Job
            .create(req.body)
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err));
    },
    getJob(req, params) {
        const id = req.params.id;
        db.Job
            .findOne({
                where: {
                    id: id
                }
            })
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err));
    },
    updateJob(req, res) {
        db.Job
            .update({
                company: req.body.company,
                job_title: req.body.job_title,
                salary: req.body.salary,
                status: req.body.status,
                notes: req.body.notes,
                user_id: req.body.user_id
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err));
    },
    deleteJob(req, params) {
        const id = req.params.id;
        db.Job
            .destroy({
                where: {
                    id: id
                }
            })
            .then(function () { console.log(`Job ${id} deleted`); })
            .catch(err => res.status(500).json(err));
    }
}