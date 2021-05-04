const express = require("express");

// Import all routers
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const app = express();

// Use the default JSON bodyparser
app.use(express.json());

// configure routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

// For all other routes!
app.use("*", (req, res) => {
  res.status(404).json({ success: false, data: [] });
});

module.exports = app;
