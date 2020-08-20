const db = require("../models");

module.exports = {
  getJobs(req, res) {
    db.Job.findAll({
      where: {
        UserId: req.headers.user.UserId
      }
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
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
  createJob(req, res) {
    console.log(req.body)
    db.Job.create(req.body)
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
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
        UserId: req.body.UserId
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
  getJobsPending(req, res) {
    db.Job.findAll({
      where: {
        status: "Pending",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  getJobsInterested(req, res) {
    db.Job.findAll({
      where: {
        status: "Interested",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  getJobsApplied(req, res) {
    db.Job.findAll({
      where: {
        status: "Applied",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  getJobsInProcess(req, res) {
    db.Job.findAll({
      where: {
        status: "In Process",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
  getJobsOutcome(req, res) {
    db.Job.findAll({
      where: {
        status: "Closed",
      },
    })
      .then((dbJob) => res.json(dbJob))
      .catch((err) => res.status(500).json(err));
  },
};
