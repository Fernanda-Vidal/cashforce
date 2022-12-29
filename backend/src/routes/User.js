const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/:id', UserController.getById);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);
router.get('/', UserController.getAll);
router.post('/', UserController.create);

module.exports = router;