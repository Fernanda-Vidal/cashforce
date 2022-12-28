/* eslint-disable max-lines-per-function */
// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersTable = queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      phone_number: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      mobile: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      departament: {
        defaultValue: null, 
        type: Sequelize.STRING,
      },
      verification_code: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      email_checked: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cash_force_adm: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1),
      },
    });
    return usersTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
