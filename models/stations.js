"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stations.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [4, 30],
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          checkLen(value) {
            if (value.length >= 5 && value.length <= 30) {
              return true;
            } else {
              throw new Error(
                "The length of address must be between 5 and 30 characters"
              );
            }
          },
        },
      },
      province: {
        type: DataTypes.STRING,
        validate: {
          isIn: [
            [
              "Ha Noi",
              "HCM",
              "Ho Chi Minh",
              "Da Nang",
              "DN",
              "Nha Trang",
              "NT",
              "HD",
              "Hai Duong",
              "Hai Phong",
              "HP",
            ],
          ],
        },
      },
    },
    {
      sequelize,
      modelName: "Stations",
    }
  );
  return Stations;
};
