const router = require('express').Router();
const usersController = require("../../controllers/user");

// Matches with "/api/jobs"
router.route("/")
    .get(usersController.getUsers)
    .post(usersController.createUser)
    .put(usersController.updateUser);

// Matches with "/api/users/:id" 
router.route("/:id")
    .get(usersController.getUser)
    .delete(usersController.deleteUser);

module.exports = router
