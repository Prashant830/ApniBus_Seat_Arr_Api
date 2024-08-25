const busModel = require('../models/busModel');
const AppError = require('../utils/AppError');

async function findBusById(Id) {
    try {
        const bus = await busModel.findBusById(Id);
        if (!bus) throw new AppError('Bus not found', 404);
        return bus;
    } catch (error) {
        throw new AppError('Bus not found', 404);
    }
}

async function getAllBuses() {
    try {
        const buses = await busModel.getBuses();
        if (!buses || Object.keys(buses).length === 0) {
            throw new AppError('Buses not found', 404);
        }
        return buses;
    } catch (error) {
        throw new AppError('Buses not found', 404);
    }
}

module.exports = { findBusById, getAllBuses };
