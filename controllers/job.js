const db = require("../models");

module.exports = {
  getJobs(req, res) {
    db.Job.findAll({
      where: {
        UserId: JSON.parse(req.headers.user).id,
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },

  createJob(req, res) {
    db.Job.create(req.body)
      .then((dbJob) => res.json(dbJob))
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  getJob(req, res) {
    const id = req.params.id;
    db.Job.findOne({
      where: {
        id: id,
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  updateJob(req, res) {
    db.Job.update(
      {
        id: req.body.id,
        company: req.body.company,
        job_title: req.body.job_title,
        salary: req.body.salary,
        status: req.body.status,
        phone: req.body.phone,
        in_person_interview_date: req.body.in_person_interview_date,
        benefits: req.body.benefits,
        location: req.body.location,
        source: req.body.source,
        notes: req.body.notes,
        UserId: req.body.UserId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  createJob(req, res) {
    db.Job.create(req.body)
      .then((dbJob) => res.json(dbJob))
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  getJobsByUser(req, res) {
    userId = req.params.id;
    db.Job.findAll({
      where: {
        UserId: userId,
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  deleteJob(req, res) {
    const id = req.params.id;
    db.Job.destroy({
      where: {
        id: id,
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  // API CALLS FOR FILTER
  getJobsByUser(req, res) {
    userId = req.params.id;
    db.Job.findAll({
      where: {
        UserId: userId,
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  getJobsPending(req, res) {
    const id = req.params.id;
    db.Job.findAll({
      where: {
        UserId: id,
        status: "Pending",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  getJobsInterested(req, res) {
    const id = req.params.id;
    db.Job.findAll({
      where: {
        UserId: id,
        status: "Interested",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  getJobsApplied(req, res) {
    const id = req.params.id;
    db.Job.findAll({
      where: {
        UserId: id,
        status: "Applied",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  getJobsInProcess(req, res) {
    const id = req.params.id;
    db.Job.findAll({
      where: {
        UserId: id,
        status: "In Process",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },

  getJobsClosed(req, res) {

    const id = req.params.id;
    db.Job.findAll({
      where: {
        UserId: id,
        status: "Closed",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
};
