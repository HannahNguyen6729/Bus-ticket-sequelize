const express = require("express");
const { register, login } = require("../controllers/user.controllers");

const userRouter = express.Router();
const { User } = require("../models/index");

userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = {
  userRouter,
};
