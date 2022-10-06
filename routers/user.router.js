const express = require("express");
const {
  register,
  login,
  uploadAvatarController,
} = require("../controllers/user.controllers");
const { authenticate } = require("../middlewares/auth/authenticate");
const { uploadImage } = require("../middlewares/upload/upload-image");

const userRouter = express.Router();
const { User } = require("../models/index");

userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.post(
  "/upload-avatar",
  authenticate,
  uploadImage(),
  uploadAvatarController
);

module.exports = {
  userRouter,
};
