const { Op } = require("sequelize");
const { Stations } = require("../models/index");
const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Stations.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllStation = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    if (name) {
      const stationList = await Stations.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(stationList);
    } else {
      const stationList = await Stations.findAll();
      res.status(200).send(stationList);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailStation = async (req, res) => {
  const { id } = await req.params;
  try {
    const station = await Stations.findOne({ where: { id } });
    res.status(200).send(station);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    await Stations.update(
      { name, address, province },
      {
        where: { id },
      }
    );
    const updatedStation = await Stations.findOne({ where: { id } });
    res.status(200).send(updatedStation);
    //cach 2
    // const detailStation = await Stations.findOne({ where: { id } });
    // detailStation.name = name;
    // detailStation.address = address;
    // detailStation.province = province;
    // await detailStation.save();
    // res.status(200).send(detailStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  console.log("station");
  try {
    await Stations.destroy({ where: { id } });
    res.status(200).send("deleted successfully ");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
};
