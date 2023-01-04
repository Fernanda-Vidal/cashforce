const { Router } = require('express');
const UserController = require('../controllers/UserController');
const userMiddleware = require('../middlewares/userMiddleware');

const router = Router();

router.get('/email', UserController.getByEmail);
router.get('/:id', UserController.getById);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);
router.get('/', UserController.getAll);
router.post('/', userMiddleware, UserController.create);

module.exports = router;