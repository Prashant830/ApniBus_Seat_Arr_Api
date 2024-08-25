const fs = require('fs').promises;

async function findBusById(Id) {
    try {
        const data = await fs.readFile(__dirname + "/../utils/bus.json", 'utf8'); 
        const buses = JSON.parse(data);
        const bus = buses["DemoBus" + Id]; 
        if (!bus) throw new Error('Bus not found');
        return bus;
    } catch (err) {
        console.error('Error in findBusById:', err.message); 
        throw new Error('Bus not found'); 
    }
}

async function getBuses() {
    try {
        const data = await fs.readFile(__dirname + "/../utils/bus.json", 'utf8'); 
        console.log('Buses data:', data);  
        return JSON.parse(data);  
    } catch (err) {
        console.error('Error in getBuses:', err.message); 
        throw new Error('Buses not found'); 
    }
}

module.exports = { findBusById, getBuses };
