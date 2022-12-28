const { Router } = require('express');
const CNPJController = require('../controllers/CNPJController');

const router = Router();

router.get('/:id', CNPJController.getById);
router.put('/:id', CNPJController.update);
router.post('/', CNPJController.create);
router.get('/', CNPJController.getAll);

module.exports = router;