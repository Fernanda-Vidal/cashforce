const { User } = require('../database/models');
const HttpException = require('../utils/HttpException');
const status = require('../utils/StatusCode');


const UserService = {
    create: async (infoUser) => {
        const {
            email } = infoUser;
        
        const UserExists = await User.findOne({ where: { email } });

        if (UserExists) {
            throw HttpException('E-mail já existe no banco de dados', status.UNAUTHORIZED)
        }

        await User.create(infoUser);
    },

    getById: async (id) => {
        const UserExists = await User.findByPk(id);

        if (UserExists === null) throw HttpException('Id não encontrado', status.NOT_FOUND);
        return UserExists;

    },

    getAll: async () => User.findAll({}),

    update: async (id, infoUser) => {
        const UserExists = await User.findByPk(id);

        if (!UserExists) throw HttpException('Id não encontrado', status.NOT_FOUND);

        const change = await User.update(infoUser,
            { where: { id } });
        
        return change;
    },

    delete: async (id) => User.destroy({ where: { id } }),
};

module.exports = UserService;