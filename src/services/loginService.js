const loginModel = require('../models/loginModel');
const AppError = require('../utils/AppError');

async function getLoginToken(body) {
    try {
        const token = await loginModel.getLoginToken(body);
        if (!token) throw new AppError('Token not found', 201);
        return token;
    } catch (error) {
        throw new AppError(error.message, 201);
    }
}

async function saveUser(body) {
    try {
        await loginModel.saveUser(body);
    } catch (error) {
        throw new AppError(error.message, 201);
    }
}

module.exports = { getLoginToken , saveUser};
