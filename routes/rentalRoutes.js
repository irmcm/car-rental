const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController');

router.post('/rent', rentalController.createRental);

module.exports = router;
