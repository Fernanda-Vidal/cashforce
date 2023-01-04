const { User } = require('../database/models');
const HttpException = require('../utils/HttpException');
const status = require('../utils/StatusCode');


const UserService = {
    create: async (infoUser) => User.create(infoUser),

    getById: async (id) => {
        const user = await User.findByPk(id);

        if (user === null) throw HttpException('Id não encontrado', status.NOT_FOUND);
        return user;

    },

    getByEmail: async (email) => {
        const user = await User.findOne({ where: { email } });

        if (!user) throw HttpException('E-mail não encontrado', status.NOT_FOUND);
        return user;
    },

    getAll: async () => User.findAll({}),

    update: async (id, infoUser) => {
        const user = await User.findByPk(id);

        if (!user) throw HttpException('Id não encontrado', status.NOT_FOUND);

        const change = await User.update(infoUser,
            { where: { id } });
        
        return change;
    },

    delete: async (id) => User.destroy({ where: { id } }),
};

module.exports = UserService;