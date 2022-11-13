const { Trip, Stations } = require("../models");

//create a new trip
const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;
  const newTrip = await Trip.create({
    fromStation,
    toStation,
    startTime,
    price,
  });
  res.status(201).send(newTrip);
};
//get all trips
const getAllTrip = async (req, res) => {
  const tripList = await Trip.findAll({
    //array 'include' contains objects. each object contains 'model' and 'as' atributes
    // 'model attribute': link to MODEL
    include: [
      {
        model: Stations,
        as: "from",
      },
      {
        model: Stations,
        as: "to",
      },
    ],
  });
  res.status(200).send(tripList);
};
//delete trip
const deleteTrip = async (req, res) => {
  const { id } = req.params;
  await Trip.destroy({
    where: { id },
  });
  res.send(`deleted successfully the trip with id: ${id}`);
};
//update trip
const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { fromStation, toStation, startTime, price } = req.body;
  await Trip.update(
    { fromStation, toStation, startTime, price },
    { where: { id } }
  );
  res.status(200).send(`updated successfully the trip with id ${id}`);
};

module.exports = {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
};
