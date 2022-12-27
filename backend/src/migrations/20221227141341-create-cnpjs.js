/* eslint-disable max-lines-per-function */
// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cnpjsTable = queryInterface.createTable('cnpjs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      cnpj: {
          allowNull: false,
          unique: true,
          type: Sequelize.VARCHAR,
        },
      companyType: {
        allowNull: false,
        type: Sequelize.VARCHAR,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return cnpjsTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('cnpjs');
  },
};
