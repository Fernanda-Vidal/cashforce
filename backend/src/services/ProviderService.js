const { Provider, CNPJ } = require('../database/models');
const HttpException = require('../utils/HttpException');
const status = require('../utils/StatusCode');

const ProviderService = {
    create: async (infoProvider) => Provider.create(infoProvider),

    getById: async (id) => {
       const provider = await Provider.findOne({
        include: {
            model: CNPJ,
            attributes: { include: 'CNPJ' } }
      }, { where: { id }});
      return provider;
    },

    getAll: async () => Provider.findAll(),

    update: async (id, infoProvider) => {
        const provider = await Provider.findByPk(id);

        if (!provider) throw HttpException('Id não encontrado', status.NOT_FOUND);

        const change = Provider.update(infoProvider,
            { where: { id } });

        return change;
    },

    delete: async (id) => Provider.destroy({ where: { id } }),
};

module.exports = ProviderService;