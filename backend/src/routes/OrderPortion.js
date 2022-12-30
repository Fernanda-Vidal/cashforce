const { Router } = require('express');
const OrderPortionsController = require('../controllers/OrderPortionsController');

const router = Router();

router.get('/:id', OrderPortionsController.getById);
router.put('/:id', OrderPortionsController.update);
router.delete('/:id', OrderPortionsController.delete);
router.get('/', OrderPortionsController.getAll);
router.post('/', OrderPortionsController.create);

module.exports = router;