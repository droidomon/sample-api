const router = require("express").Router();
const { login, logout } = require("../controllers/auth");
const authorize = require("../middlewares/authorizationChecker");

// route POST requests meant for "/login" url
router.route("/login").post(login);

// route GET requests meant for "/logout url"
router.route("/logout").get(authorize, logout);

module.exports = router;
