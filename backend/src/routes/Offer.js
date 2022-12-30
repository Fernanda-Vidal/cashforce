const { Router } = require('express');
const OfferController = require('../controllers/OfferController');

const router = Router();

router.get('/:id', OfferController.getById);
router.put('/:id', OfferController.update);
router.delete('/:id', OfferController.delete);
router.get('/', OfferController.getAll);
router.post('/', OfferController.create);

module.exports = router;