const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationsController');

router.get('/',reservationController.getAll);
router.get('/:id',reservationController.getId);
router.post('/',reservationController.create);
router.patch('/:id',reservationController.update);
router.delete('/:id',reservationController.delete);

module.exports = router ; 