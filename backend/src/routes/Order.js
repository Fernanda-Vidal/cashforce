const { Router } = require('express');
const OrderController = require('../controllers/OrderController');
const orderMiddleware = require('../middlewares/orderMiddleware');

const router = Router();

router.get('/user/:id', OrderController.getByUser);
router.get('/:id', OrderController.getById);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.delete);
router.get('/', OrderController.getAll);
router.post('/', orderMiddleware, OrderController.create);

module.exports = router;