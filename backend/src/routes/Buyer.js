const { Router } = require('express');
const BuyerController = require('../controllers/BuyerController');

const router = Router();

router.get('/:id', BuyerController.getById);
router.put('/:id', BuyerController.update);
router.delete('/:id', BuyerController.delete);
router.get('/', BuyerController.getAll);
router.post('/', BuyerController.create);

module.exports = router;