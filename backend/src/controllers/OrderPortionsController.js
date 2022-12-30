const OrderPortionsService = require('../services/OrderPortionsService');
const status = require('../utils/StatusCode');

const OrderPortionsController = {
    create: async (req, res, next) => {
        try {
            await OrderPortionsService.create(req.body);
            return res.status(status.CREATED).json({ message: 'Created!' })
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const sponsor = await OrderPortionsService.getById(Number(id));
            return res.status(status.OK).json(sponsor);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getAll: async (_req, res, next) => {
        try {
            const sponsor = await OrderPortionsService.getAll();
            return res.status(status.OK).json(sponsor);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const sponsor = await OrderPortionsService.update(id, req.body);
            return res.status(status.OK).json(sponsor);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req. params;
            const sponsor = await OrderPortionsService.delete(Number(id));
            return res.status(status.OK).json(sponsor);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },
};

module.exports = OrderPortionsController;