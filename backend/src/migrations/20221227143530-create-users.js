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
        type: Sequelize.VARCHAR,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.VARCHAR,
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      mobile: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      departament: {
        defaultValue: null, 
        type: Sequelize.VARCHAR,
      },
      verificationCode: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      emailChecked: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cashForceAdm: {
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
