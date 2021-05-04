const db = require("../db/dummy");

module.exports.login = (req, res, next) => {
  const { username, password } = req.body;

  // if the username or password is empty, send 400 for bad request
  if (!username || !password) {
    res.status(400).json({ success: false, data: [] });
    return;
  }

  // find the user
  const user = db.users.find((user) => user.username == username);

  // if user does not exist, send 401 for unauthorized access
  if (!user) {
    res.status(401).json({ success: false, data: [] });
    return;
  }
  // if the password is incorrect, send 401 for unauthorized access
  if (user.password != password) {
    res.status(401).json({ success: false, data: [] });
    return;
  }
  const { name, authToken } = user;

  const userPublic = {
    name,
    username,
    authToken,
  };
  // If the credentials are correct, send 200 OK with user's public info and authtoken
  res.status(200).json({ success: true, data: [userPublic] });
};

module.exports.logout = (req, res, next) => {
  // get the user that's currently authorized
  const user = req.body.currentUser;

  // pretend that the user logged out and send 200 along with the username of the user
  res.status(200).json({ success: true, data: [{ username: user.username }] });
};
