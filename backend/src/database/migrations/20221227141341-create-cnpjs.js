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
        type: Sequelize.STRING,
        },
      company_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    return cnpjsTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('cnpjs');
  },
};
