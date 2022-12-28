module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('providers',
      [{   
        id: 1,
        name: 'CEDENTE 002',
        tradingName:  'CEDENTE 002 LTDA',
        // cashforceTax: NULL,
        // responsibleName: NULL,
        // responsibleEmail: NULL,
        // responsiblePosition: NULL,
        // responsiblePhone: NULL,
        // responsibleMobile: NULL,
        // website: NULL,
        // postalCode: NULL,
        // address: NULL,
        // number: NULL,
        // complement: NULL,
        // neighborhood: NULL,
        // city: NULL,
        // state: NULL,
        // bank: NULL,
        // bankAgency: NULL,
        // account: NULL,
        // documents: NULL,
        // phoneNumber: NULL,
        // situation: NULL,
        // situationDate: NULL,
        createdAt: '2020-10-29 21:22:21',
        updatedAt: '2020-10-29 21:22:22',
        cnpjId: 2,
        // email: NULL
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('providers', null, {});
  },
};