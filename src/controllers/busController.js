const busService = require('../services/busService');
const AppError = require('../utils/AppError');

async function getAllBuses(req, res, next) {
    try {
        const busData = await busService.getAllBuses();
        res.status(200).json({
            status: 'success',
            data: { busData },
        });
    } catch (error) {
        next(error)
    }
}

async function getBusById(req, res, next) {
    try {
        const bus = await busService.findBusById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: { bus },
        });
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllBuses, getBusById };
