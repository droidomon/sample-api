const asyncHandler = require("../middlewares/asyncHandler"); // not needed while working with dummy data, but useful when querying a real database
const db = require("../db/dummy");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = db.users; // get all users from the db
  const usersPublic = [];

  // remove password for each user
  users.forEach((user) => {
    usersPublic.push({ id: user.id, name: user.name, username: user.username });
  });

  // send non-sensitive details about the users
  res.status(200).json({ success: true, data: usersPublic });
});

exports.registerUser = asyncHandler(async (req, res, next) => {
  const { username, password, name } = req.body;

  // if the username, password, or name is empty, return 400 else continue
  if (!username || !password || !name) {
    res.status(400).json({ success: false, data: [] });
    return;
  }

  // pretend that the data is added to db and return name and username of the user.
  res.status(200).json({ success: true, data: [{ name, username }] });
});
