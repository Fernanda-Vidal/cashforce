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
        type: Sequelize.STRING,
      },
      tradingName: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      cash_force_tax: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsible_name: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsible_email: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsible_position: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsible_phone: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      responsible_mobile: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      website: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      postal_code: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      address: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      number: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      complement: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      neighborhood: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      city: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      state: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      bank: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      bank_agency: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      account: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      documents: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      phone_number: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      situation: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
      situation_date: {
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
      email: {
        defaultValue: null,
        type: Sequelize.STRING,
      },
    });
    return providersTable;
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('providers');
  },
};
