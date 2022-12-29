const { Router } = require('express');
const OrderController = require('../controllers/OrderController');

const router = Router();

router.get('/:id', OrderController.getById);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.delete);
router.get('/', OrderController.getAll);
router.post('/', OrderController.create);

module.exports = router;