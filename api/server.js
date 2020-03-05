const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const dataRouter = require('../data/data-router.js')
const restricted = require("../auth/restricted-middleware.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use(cors({
  credentials: true,
}));

server.use("/auth", authRouter);
server.use("/api/users", restricted, checkRole("user"), usersRouter);
server.use("/data", dataRouter)

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;

function checkRole(role) {
  return (req, res, next) => {
    if (
      req.decodedToken &&
      req.decodedToken.role &&
      req.decodedToken.role.toLowerCase() === role
    ) {
      next();
    } else {
      res.status(403).json({ you: "CONSTRUCT MORE PYLONS!" });
    }
  };
}
