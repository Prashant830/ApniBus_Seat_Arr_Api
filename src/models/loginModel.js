const JWT_SECRET = require('../config/config').JWT_SECRET;
const AppError = require('../utils/AppError');
const jwt = require('jsonwebtoken');

async function getLoginToken(body) {
    try {
        if (!body) {
            throw new AppError('Request body is missing', 201);
        }

        const { username, password } = body;

        if (username !== "Prashant" || password !== "123456") {
            throw new AppError('Invalid credentials', 201);
        }

        const token = jwt.sign({ id: 'staticUserId123' }, JWT_SECRET, { expiresIn: '1h' });
        return token;
    } catch (err) {
        console.error('Error in token generation:', err.message); 
        throw new AppError('Token generation failed', 201);
    } 
}

module.exports = { getLoginToken };
