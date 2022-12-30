const SponsorService = require('../services/SponsorService');
const status = require('../utils/StatusCode');

const SponsorController = {
    create: async (req, res, next) => {
        try {
            await SponsorService.create(req.body);
            return res.status(status.CREATED).json({ message: 'Created!' })
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const sponsor = await SponsorService.getById(Number(id));
            return res.status(status.OK).json(sponsor);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getAll: async (_req, res, next) => {
        try {
            const sponsor = await SponsorService.getAll();
            return res.status(status.OK).json(sponsor);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const sponsor = await SponsorService.update(id, req.body);
            return res.status(status.OK).json(sponsor);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req. params;
            const sponsor = await SponsorService.delete(Number(id));
            return res.status(status.OK).json(sponsor);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },
};

module.exports = SponsorController;