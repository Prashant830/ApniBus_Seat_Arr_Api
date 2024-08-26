const express = require('express');
const busController = require('../controllers/busController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/getBuses', authenticateJWT, busController.getAllBuses);
router.get('/:id',authenticateJWT, busController.getBusById);

module.exports = router;
