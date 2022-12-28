module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        emailChecked: 1,
        createdAt: '2020-10-01 21:31:37',
        updatedAt: '2020-10-01 22:41:23',
        cashforceAdm: 1,
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};