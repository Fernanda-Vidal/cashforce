/* eslint-disable max-lines-per-function */
// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orderPortionsTable = queryInterface.createTable('orderPortions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      nDup: {
        allowNull: false,
        type: Sequelize.VARCHAR,
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.VARCHAR,
      },
      vDup: {
        allowNull: false,
        type: Sequelize.VARCHAR,
      },
      availableToMarket: {
        defaultValue: 1,
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
      orderId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'orders',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    });
    return orderPortionsTable;
  },

  down: async (queryInterface, _Sequelize) => {
      await queryInterface.dropTable('orderPortions');
  },
};