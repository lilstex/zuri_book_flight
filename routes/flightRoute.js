const express = require('express');
const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlights);
router.get('/:id', controller.getSingleFlight);
router.post('/flight', controller.bookFlight);
router.patch('/update/:id', controller.updateFlight);
router.delete('/delete/:id', controller.deleteFlight);

module.exports = router;

