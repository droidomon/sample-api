const asyncHandler = require("../middlewares/asyncHandler");
const db = require("../db/dummy");

module.exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ success: false, data: [] });
    return;
  }

  const users = db.users.filter((user) => user.username == username);

  if (users.length == 0) {
    res.status(401).json({ success: false, data: [] });
    return;
  }

  if (users[0].password != password) {
    res.status(401).json({ success: false, data: [] });
    return;
  }
  const { name, authToken } = users[0];

  const userPublic = {
    name,
    username,
    authToken,
  };

  res.status(200).json({ success: true, data: [userPublic] });
});

module.exports.logout = asyncHandler(async (req, res, next) => {
  const user = req.body.currentUser;
  res.status(200).json({ success: true, data: [{ username: user.username }] });
});
