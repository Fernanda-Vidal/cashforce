const UserService = require('../services/UserService');
const status = require('../utils/StatusCode');

const UserController = {
    create: async (req, res, next) => {
        try {
            // const { name, email, phoneNumber,
            //     mobile, departament, verificationCode,
            //     emailCheked, cashForceAdm } = req.body;
            await UserService.create(req.body);
            return res.status(status.CREATED).json({ message: 'Usuário cadastrado com sucesso' });
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    getById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await UserService.getById(Number(id));
            return res.status(status.OK).json(user);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }

    },

    getAll: async (_req, res, next) => {
        try {
            const user = await UserService.getAll();
            return res.status(status.OK).json(user);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await UserService.update(Number(id), req.body);
            return res.status(status.OK).json(user);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await UserService.delete(Number(id));
            return res.status(status.OK).json(user);
        } catch (error) {
            console.log('erro', error);
            next(error);
        }
    },
};

module.exports = UserController;