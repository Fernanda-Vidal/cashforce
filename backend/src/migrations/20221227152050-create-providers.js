/* eslint-disable max-lines-per-function */
// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const providersTable = queryInterface.createTable('providers', {
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
      tradingName: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      cashForceTax: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      responsibleName: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      responsibleEmail: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      responsiblePosition: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      responsiblePhone: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      responsibleMobile: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      website: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      postalCode: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      address: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      number: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      complement: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      neighborhood: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      city: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      state: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      bank: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      bankAgency: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      account: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      documents: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      situation: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
      situationDate: {
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
      email: {
        defaultValue: null,
        type: Sequelize.VARCHAR,
      },
    });
    return providersTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('providers');
  },
};
