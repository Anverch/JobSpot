const router = require('express').router();
const jobsController = require("../../controllers/jobs");

// api/jobs
router.route("/")
.get(jobsController.getJobs);