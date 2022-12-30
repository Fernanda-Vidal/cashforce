const { Offer } = require('../database/models');
const status = require('../utils/StatusCode');

const OfferService = {
    create: async (infoOffer) => Offer.create(infoOffer),

    getById: async (id) => Offer.findByPk(id),

    getAll: async () => Offer.findAll(),

    update: async (id, infoOffer) => {
        const offer = await Offer.findByPk(id);

        if (!offer) throw HttpException('Id não encontrado', status.NOT_FOUND);

        const change = await Offer.update(infoOffer,
            { where: { id } });

        return change;
    },

    delete: async (id) => Offer.destroy({ where: { id } }),
};

module.exports = OfferService;