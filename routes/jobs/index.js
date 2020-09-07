const router = require("express").Router();
const jobsController = require("../../controllers/job");
// Requiring our custom middleware for checking if a user is logged in. Routes with 'isAuthenticated' passed through are restricted routes for members only.
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "api/jobs/pending"
router.route("/pending/:id").get(jobsController.getJobsPending);

// Matches with "api/jobs/interested"
router.route("/interested/:id").get(jobsController.getJobsInterested);

// Matches with  "api/jobs/applied"
router.route("/applied/:id").get(jobsController.getJobsApplied);

// Matches with  "api/jobs/inprocess"
router.route("/inprocess/:id").get(jobsController.getJobsInProcess);

// Matches with  "api/jobs/closed"
router.route("/closed/:id").get(jobsController.getJobsClosed);


// Matches with "/api/jobs"
router.route("/").get(jobsController.getJobs).post(jobsController.createJob);

// Matches with "/api/jobs/:id"
router
  .route("/:id")
  .get(jobsController.getJob)
  .put(jobsController.updateJob)
  .delete(jobsController.deleteJob);

// Matches with "/api/jobs/user/:id"

router.route("/user/:id")
    .get(jobsController.getJobsByUser);

module.exports = router
