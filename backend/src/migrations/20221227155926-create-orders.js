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
      orderNFId: {
        allowNull: false,
        unique: true,
        type: Sequelize.VARCHAR,
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.VARCHAR,
      },
      orderPath: {
        defaultValue: null,
        unique: true,
        type: Sequelize.VARCHAR,
      },
      orderFileName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.VARCHAR,
      },
      orderOriginalName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.VARCHAR,
      },
      emissionDate: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      pdfFile: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.VARCHAR,
      },
      nNF: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      CTE: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      value: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      userId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      buyerId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'buyers',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      providerId: {
        defaultValue: null,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'providers',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      orderStatusBuyer: {
        defaultValue: 0,
        type: Sequelize.VARCHAR,
      },
      orderStatusProvider: {
        defaultValue: 0,
        type: Sequelize.VARCHAR,
      },
      deliveryReceipt: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      cargoPackingList: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      deliveryCtrc: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
    });
    return ordersTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('orders');
  },
};
