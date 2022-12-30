const { OrderPortion } = require('../database/models');
const status = require('../utils/StatusCode');

const OrderPortionsService = {
    create: async (infoOrderPortion) => OrderPortion.create(infoOrderPortion),

    getById: async (id) => OrderPortion.findByPk(id),

    getAll: async () => OrderPortion.findAll(),

    update: async (id, infoOrderPortion) => {
        const orderPortion = await OrderPortion.findByPk(id);

        if (!orderPortion) throw HttpException('Id não encontrado', status.NOT_FOUND);

        const change = await OrderPortion.update(infoOrderPortion,
            { where: { id } });

        return change;
    },

    delete: async (id) => OrderPortion.destroy({ where: { id } }),
}

module.exports = OrderPortionsService;