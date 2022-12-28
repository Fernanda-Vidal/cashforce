const CNPJService = require('../services/CNPJService');
const status = require('../utils/StatusCode');

const CNPJController = {
    create: async (req, res, next) => {
        try {
            const { cnpj, companyType } = req.body;
            await CNPJService.create({ cnpj, companyType });
            return res.status(status.CREATED).json({ message: 'CNPJ cadastrado com sucesso' });
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const CNPJ = await CNPJService.getById(Number(id));
            return res.status(status.OK).json(CNPJ);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getAll: async (req, res, next) => {
        try {
            const CNPJs = await CNPJService.getAll();
            return res.status(status.OK).json(CNPJs);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { cnpj, companyType } = req.body;
            const { id } = req.params;
            const CNPJ = await CNPJService.update(Number(id), cnpj, companyType);    
            return res.status(status.OK).json(CNPJ);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
      },
};

module.exports = CNPJController;