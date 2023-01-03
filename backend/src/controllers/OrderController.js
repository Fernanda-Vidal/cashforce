const OrderService = require('../services/OrderService');
const status = require('../utils/StatusCode');

const OrderController = {
    create: async (req, res, next) => {
        try {
            await OrderService.create(req.body);
            return res.status(status.CREATED).json({ message: 'Created!' })
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const order = await OrderService.getById(Number(id));
            return res.status(status.OK).json(order);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getByUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            const orders = await OrderService.getByUser(Number(id));
            return res.status(status.OK).json(orders);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getAll: async (_req, res, next) => {
        try {
            const order = await OrderService.getAll();
            return res.status(status.OK).json(order);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const order = await OrderService.update(id, req.body);
            return res.status(status.OK).json(order);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req. params;
            const order = await OrderService.delete(Number(id));
            return res.status(status.OK).json(order);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },
};

module.exports = OrderController;