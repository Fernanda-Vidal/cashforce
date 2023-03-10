const { Router } = require('express');
const CNPJController = require('../controllers/CNPJController');
const CNPJMiddleware = require('../middlewares/CNPJMiddleware');

const router = Router();

router.get('/:id', CNPJController.getById);
router.put('/:id', CNPJController.update);
router.delete('/:id', CNPJController.delete);
router.post('/', CNPJMiddleware, CNPJController.create);
router.get('/', CNPJController.getAll);

module.exports = router;