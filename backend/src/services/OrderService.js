const { Order, Buyer, Provider } = require('../database/models');
const status = require('../utils/StatusCode');

const OrderService = {
    create: async (infoOrder) => Order.create(infoOrder),

    getById: async (id) => Order.findByPk(id),

    getByUser: async (userId) => {
      const orderByUser = await Order.findAll({
        include: [{
            model: Buyer,
            attibutes: { include: 'name' }
        }, {
            model: Provider,
            attibutes: { include: 'name' }
        }], where: { userId }
      })
      return orderByUser;
    },
    
    getAll: async () => Order.findAll(),

    update: async (id, infoOrder) => {
        const order = await Order.findByPk(id);

        if (!order) throw HttpException('Id não encontrado', status.NOT_FOUND);

        const change = await Order.update(infoOrder,
            { where: { id } });

        return change;
    },

    delete: async (id) => Order.destroy({ where: { id } }),
};

module.exports = OrderService;