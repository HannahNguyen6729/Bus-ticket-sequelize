const express = require("express");
const {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
} = require("../controllers/station.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const { checkExist } = require("../middlewares/validation/checkExist");
const { Stations } = require("../models/index");
const stationRouter = express.Router();

stationRouter.post(
  "/",
  authenticate,
  authorize(["ADMIN", "SUB_ADMIN"]),
  createStation
);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", authenticate, checkExist(Stations), updateStation);
stationRouter.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN", "SUB_ADMIN"]),
  checkExist(Stations),
  deleteStation
);
module.exports = {
  stationRouter,
};
