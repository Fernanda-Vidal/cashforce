const { Router } = require('express');
const ProviderController = require('../controllers/ProviderController');

const router = Router();

router.get('/:id', ProviderController.getById);
router.put('/:id', ProviderController.update);
router.delete('/:id', ProviderController.delete);
router.get('/', ProviderController.getAll);
router.post('/', ProviderController.create);

module.exports = router;