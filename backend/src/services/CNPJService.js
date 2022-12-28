const { CNPJ } = require('../database/models');
const HttpException = require('../utils/HttpException');
const status = require('../utils/StatusCode');

const CNPJService = {
    create: async ({ cnpj, companyType }) => {
        const CNPJExists = await CNPJ.findOne({ where: { cnpj } });
        
        if (CNPJExists) {
            throw HttpException('CNPJ já existe no banco de dados', status.UNAUTHORIZED);
        }

        await CNPJ.create({ cnpj, companyType });
    },

    getById: async (id) => {
        const CNPJExists = await CNPJ.findByPk(id);

        if (CNPJExists === null) throw HttpException('Id não encontrado', status.NOT_FOUND);
        return CNPJExists;
    },

    getAll: async () => CNPJ.findAll({}),

    update: async (id, cnpj, companyType) => {
        const CNPJExists = await CNPJ.findByPk(id);
        
        if (!CNPJExists) throw HttpException('Id não encontrado', status.NOT_FOUND);
        
        const doUpdate = await CNPJ.update({ cnpj, companyType },
            { where: { id } });
        
            return doUpdate;
      },

      delete: async (id) => CNPJ.destroy({ where: { id } }),
};

module.exports = CNPJService;