"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "ben xe Ben Tam",
          address: "120 Tran Toan",
          province: "HN",
          createdAt: "2022-10-09 09:05:05",
          updatedAt: "2022-10-09 09:10:20",
        },
        {
          name: "ben xe Tran Trung",
          address: "120 Tran Toan",
          province: "HN",
          createdAt: "2022-10-09 09:05:05",
          updatedAt: "2022-10-09 09:10:20",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("stations", null, {});
  },
};
