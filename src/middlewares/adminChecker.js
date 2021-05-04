const db = require("../db/dummy");

module.exports = (req, res, next) => {
  // check if the current user is part of admin db
  const admin = db.admins.find((admin) => admin.id == req.body.currentUser.id);

  // if user is admin, continue, else return 401
  if (admin) {
    next();
  } else {
    res.status(401).json({ success: false, data: [] });
  }
};
