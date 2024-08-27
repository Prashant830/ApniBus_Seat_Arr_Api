const busModel = require('../models/busModel');
const AppError = require('../utils/AppError');

async function findBusById(Id) {
    try {
        const bus = await busModel.findBusById(Id);
        if (!bus) throw new AppError('Bus not found by id', 201);
        return bus;
    } catch (error) {
        throw new AppError(error.message, 201);
    }
}

async function getAllBuses() {
    try {
        const buses = await busModel.getBuses();
        if (!buses || Object.keys(buses).length === 0) {
            throw new AppError('Buses not found', 201);
        }
        return buses;
    } catch (error) {
        throw new AppError(error.message, 201);
    }
}

module.exports = { findBusById, getAllBuses };
