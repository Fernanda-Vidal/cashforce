/* eslint-disable max-lines-per-function */
// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ordersTable = queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      orderNF_id: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      order_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      order_path: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING,
      },
      order_file_name: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING,
      },
      order_original_name: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING,
      },
      emission_date: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      pdf_file: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      emited_to: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nNF: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      CTE: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      value: {
        defaultValue: null,
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
      cnpj_id: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      user_id: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      buyer_id: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'buyers',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      provider_id: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'providers',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      order_status_buyer: {
        defaultValue: 0,
        type: Sequelize.STRING,
      },
      order_status_provider: {
        defaultValue: 0,
        type: Sequelize.STRING,
      },
      delivery_receipt: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      cargo_packing_list: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      delivery_ctrc: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
    });
    return ordersTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('orders');
  },
};
