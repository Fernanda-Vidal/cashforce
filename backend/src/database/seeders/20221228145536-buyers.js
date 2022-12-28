module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('buyers',
      [{   
        id: 1,
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: '0',
        // responsibleName: NULL,
        // responsibleEmail: NULL, 
        // responsiblePhone: NULL,
        // responsiblePosition: NULL,
        // responsibleMobile: NULL,
        // website: NULL,
        // postalCode: NULL,
        // address: NULL,
        // number: NULL,
        // complement: NULL,
        // neighborhood: NULL,
        // city: NULL,
        // state: NULL,
        // phoneNumber: NULL,
        // situation: NULL,
        // situationDate: NULL,
        createdAt: '2020-10-29 21:20:33',
        updatedAt: '2020-10-29 21:20:34',
        cnpjId: 1,
        confirm: 1,
        // email: NULL
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('buyers', null, {});
  },
};