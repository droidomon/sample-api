const db = require("../db/dummy");

module.exports = (req, res, next) => {
  // proceed further only if authorization header is found, else return 401
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    const user = db.users.find((user) => user.authToken == token);

    // if user exists, then add him to request body else return 401
    if (user) {
      req.body.currentUser = user;
      next();
    } else {
      res.status(401).json({ success: false, data: [] });
    }
  } else {
    res.status(401).json({ success: false, data: [] });
  }
};
