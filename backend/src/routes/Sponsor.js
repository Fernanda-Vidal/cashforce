const { Router } = require('express');
const SponsorController = require('../controllers/SponsorController');

const router = Router();

router.get('/:id', SponsorController.getById);
router.put('/:id', SponsorController.update);
router.delete('/:id', SponsorController.delete);
router.get('/', SponsorController.getAll);
router.post('/', SponsorController.create);

module.exports = router;