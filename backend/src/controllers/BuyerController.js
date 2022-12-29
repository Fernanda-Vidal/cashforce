const BuyerService = require('../services/BuyerService');
const status = require('../utils/StatusCode');

const BuyerController = {
    create: async (req, res, next) => {
        try {
            await BuyerService.create(req.body);
            return res.status(status.CREATED).json({ message: 'Created!' })
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const buyer = await BuyerService.getById(Number(id));
            return res.status(status.OK).json(buyer);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getAll: async (_req, res, next) => {
        try {
            const buyers = await BuyerService.getAll();
            return res.status(status.OK).json(buyers);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const buyer = await BuyerService.update(id, req.body);
            return res.status(status.OK).json(buyer);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req. params;
            const user = await BuyerService.delete(Number(id));
            return res.status(status.OK).json(user);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },
};

module.exports = BuyerController;