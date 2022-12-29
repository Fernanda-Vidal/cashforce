const { Sponsor } = require('../database/models');
const status = require('../utils/StatusCode');

const SponsorService = {
    create: async (infoSponsor) => Sponsor.create(infoSponsor),

    getById: async (id) => Sponsor.findByPk(id),

    getAll: async () => Sponsor.findAll(),

    update: async (id, infoSponsor) => {
        const sponsor = await Sponsor.findByPk(id);

        if (!sponsor) throw HttpException('Id não encontrado', status.NOT_FOUND);

        const change = await Sponsor.update(infoSponsor,
            { where: { id } });

        return change;
    },

    delete: async (id) => Sponsor.destroy({ where: { id } }),
};

module.exports = SponsorService;