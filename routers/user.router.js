const express = require("express");
const { register, login } = require("../controllers/user.controllers");

const userRouter = express.Router();
const { User } = require("../models/index");

userRouter.post("/register", register);
userRouter.post("/login", login);
//upload image : using multer library to upload the image
const multer = require("multer");
const upload = multer({ dest: "./uploads/avatars" });
userRouter.post("/upload-avatar", upload.single("avatar"), (req, res, next) => {
  res.send("uploading image function is running successfully");
});

module.exports = {
  userRouter,
};
