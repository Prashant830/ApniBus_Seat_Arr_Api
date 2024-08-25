function AppError(message, statusCode) {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.status = statusCode >= 500 ? 'error' : 'fail';
    error.isOperational = true;
    
    // Capture the stack trace for better debugging
    if (Error.captureStackTrace) {
        Error.captureStackTrace(error, AppError);
    }

    return error;
}

module.exports = AppError;
