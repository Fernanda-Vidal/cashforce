/* eslint-disable max-lines-per-function */
// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const offersTable = queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ad_valorem: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      expires_in: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      payment_status_sponsor: {
        defaultValue: 0,
        type: Sequelize.TINYINT(1),
      },
      payment_status_provider: {
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
      sponsor_id: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'sponsors',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    });
    return offersTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('offers');
},
};
