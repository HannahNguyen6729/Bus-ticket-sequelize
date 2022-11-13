"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stations }) {
      // define association here
      //1 trip belongs to 1 station
      this.belongsTo(Stations, { foreignKey: "fromStation", as: "from" });
      this.belongsTo(Stations, { foreignKey: "toStation", as: "to" });
    }
  }
  Trip.init(
    {
      startTime: DataTypes.DATE,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Trip",
    }
  );
  return Trip;
};
