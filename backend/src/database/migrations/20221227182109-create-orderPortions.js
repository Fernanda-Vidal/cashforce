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
      n_dup: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      d_venc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      v_dup: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      available_to_market: {
        defaultValue: 1,
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
      order_id: {
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