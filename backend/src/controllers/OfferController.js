const OfferService = require('../services/OfferService');
const status = require('../utils/StatusCode');

const OfferController = {
    create: async (req, res, next) => {
        try {
            await OfferService.create(req.body);
            return res.status(status.CREATED).json({ message: 'Created!' })
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const offer = await OfferService.getById(Number(id));
            return res.status(status.OK).json(offer);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getAll: async (_req, res, next) => {
        try {
            const offer = await OfferService.getAll();
            return res.status(status.OK).json(offer);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const offer = await OfferService.update(id, req.body);
            return res.status(status.OK).json(offer);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req. params;
            const offer = await OfferService.delete(Number(id));
            return res.status(status.OK).json(offer);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },
};

module.exports = OfferController;