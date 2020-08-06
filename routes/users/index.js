const router = require('express').Router();
const usersController = require("../../controllers/user");

// api/jobs
router.route("/")
    .get(usersController.getUsers)
    .post(usersController.createUser);

router.route("/:id")
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = router
