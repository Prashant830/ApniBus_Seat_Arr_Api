const fs = require('fs').promises;
const AppError = require('../utils/AppError');

async function findBusById(Id) {
    try {
        const data = await fs.readFile(__dirname + "/../utils/bus.json", 'utf8'); 
        const buses = JSON.parse(data);
        const bus = buses["DemoBus" + Id]; 
        if (!bus) throw new AppError('Bus not found', 201);
        return bus;
    } catch (err) {
        console.error('Error in findBusById:', err.message); 
        throw new AppError('Bus not found', 201); 
    }
}

async function getBuses() {
    try {
        const data = await fs.readFile(__dirname + "/../utils/bus.json", 'utf8'); 
        console.log('Buses data:', data);  
        return JSON.parse(data);  
    } catch (err) {
        console.error('Error in getBuses:', err.message); 
        throw new AppError('Buses not found', 201); 
    }
}

module.exports = { findBusById, getBuses };
