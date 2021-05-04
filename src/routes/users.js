const router = require("express").Router();
const { getUsers, registerUser } = require("../controllers/users");
const adminChecker = require("../middlewares/adminChecker");
const authorize = require("../middlewares/authorizationChecker");

// route GET and POST requests meant for base url
router.route("/").get(authorize, adminChecker, getUsers).post(registerUser);

module.exports = router;
