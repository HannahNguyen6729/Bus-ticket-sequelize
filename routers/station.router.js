const express = require("express");
const {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
} = require("../controllers/station.controller");
const { checkExist } = require("../middlewares/checkExist");
const { Stations } = require("../models/index");
const stationRouter = express.Router();

stationRouter.post("/", createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", checkExist(Stations), updateStation);
stationRouter.delete("/:id", checkExist(Stations), deleteStation);
module.exports = {
  stationRouter,
};
