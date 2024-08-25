const express = require('express');
const busController = require('../controllers/busController');

const router = express.Router();

router.get('/getBuses', busController.getAllBuses);
router.get('/:id', busController.getBusById);

module.exports = router;
