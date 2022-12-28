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
        type: Sequelize.STRING,
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderPath: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING,
      },
      orderFileName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING,
      },
      orderOriginalName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING,
      },
      emissionDate: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      pdfFile: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      emitedTo: {
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
        type: Sequelize.STRING,
      },
      orderStatusProvider: {
        defaultValue: 0,
        type: Sequelize.STRING,
      },
      deliveryReceipt: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
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
