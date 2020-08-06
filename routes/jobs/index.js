const router = require('express').Router();
const jobsController = require("../../controllers/job");

// Matches with "/api/jobs"
router.route("/")
    .get(jobsController.getJobs)
    .post(jobsController.createJob)
    .put(jobsController.updateJob);
// Matches with "/api/jobs/:id" 
router.route("/:id")
    .get(jobsController.getJob)
    .delete(jobsController.deleteJob);

// Matches with "/api/jobs/user/:id"
router.route("/user/:id")
    .get(jobsController.getJobsByUser);

module.exports = router