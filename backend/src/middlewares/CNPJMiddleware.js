const { CNPJ } = require('../database/models');
const HttpException = require('../utils/HttpException');
const status = require('../utils/StatusCode');

const CNPJMiddleware = async (req, res, next) => {
    const { cnpj } = req.body;

    const CNPJExists = await CNPJ.findOne({ where: { cnpj } });

    if (CNPJExists) {
        return res.status(status.UNAUTHORIZED).json({ message: 'CNPJ já existe no banco de dados' });
    };
    
    next();
};

module.exports = CNPJMiddleware;