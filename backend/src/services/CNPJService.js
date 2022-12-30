const { CNPJ } = require('../database/models');
const HttpException = require('../utils/HttpException');
const status = require('../utils/StatusCode');

const CNPJService = {
    create: async (infoCNPJ) => CNPJ.create(infoCNPJ),

    getById: async (id) => {
        const CNPJExists = await CNPJ.findByPk(id);

        if (CNPJExists === null) throw HttpException('Id não encontrado', status.NOT_FOUND);
        return CNPJExists;
    },

    getAll: async () => CNPJ.findAll({}),

    update: async (id, infoCNPJ) => {
        const CNPJExists = await CNPJ.findByPk(id);
        
        if (!CNPJExists) throw HttpException('Id não encontrado', status.NOT_FOUND);
        
        const change = await CNPJ.update(infoCNPJ,
            { where: { id } });
        
            return change;
      },

      delete: async (id) => CNPJ.destroy({ where: { id } }),
};

module.exports = CNPJService;