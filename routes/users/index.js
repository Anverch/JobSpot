const router = require('express').Router();
const usersController = require("../../controllers/user");
const passport = require("../../config/passport");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/users"
router.route("/")
    .get(usersController.getUsers)
    .post(usersController.createUser)

// Matches with "/api/users/user_data"
router.route("/user_data")
    .get(isAuthenticated, usersController.getUserData);

// Matches with "/api/users/:id" 
router.route("/:id")
    .get(usersController.getUser)
    .delete(usersController.deleteUser)
    .put(usersController.updateUser);

// Matches with "/api/users/login" 
router.route("/login")
    .post(passport.authenticate('local'), isAuthenticated, usersController.login);

module.exports = router
