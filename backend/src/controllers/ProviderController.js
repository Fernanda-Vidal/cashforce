const ProviderService = require('../services/ProviderService');
const status = require('../utils/StatusCode');

const ProviderController = {
    create: async (req, res, next) => {
        try {
            await ProviderService.create(req.body);
            return res.status(status.CREATED).json({ message: 'Created!' })
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const provider = await ProviderService.getById(Number(id));
            return res.status(status.OK).json(provider);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getAll: async (_req, res, next) => {
        try {
            const provider = await ProviderService.getAll();
            return res.status(status.OK).json(provider);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const provider = await ProviderService.update(id, req.body);
            return res.status(status.OK).json(provider);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req. params;
            const provider = await ProviderService.delete(Number(id));
            return res.status(status.OK).json(provider);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },
};

module.exports = ProviderController;