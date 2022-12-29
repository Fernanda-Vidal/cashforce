const { Buyer } = require('../database/models');
const status = require('../utils/StatusCode');

const BuyerService = {
    create: async (infoBuyer) => Buyer.create(infoBuyer),

    getById: async (id) => Buyer.findByPk(id),

    getAll: async (id) => Buyer.findAll(),

    update: async (id, infoBuyer) => {
        const buyer = await Buyer.findByPk(id);

        if (!buyer) throw HttpException('Id não encontrado', status.NOT_FOUND);

        const change = Buyer.update(infoBuyer,
            { where: { id } });

        return change;
    },

    delete: async (id) => Buyer.destroy({ where: { id } }),
};

module.exports = BuyerService;