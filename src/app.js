const express = require("express");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

module.exports = app;
