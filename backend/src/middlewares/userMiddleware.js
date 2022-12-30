const { User } = require('../database/models');
const status = require('../utils/StatusCode');

const userMiddleware = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
        res.status(status.UNAUTHORIZED).json({ message: 'E-mail já existe no banco de dados' });
    };

    next();
};

module.exports = userMiddleware;