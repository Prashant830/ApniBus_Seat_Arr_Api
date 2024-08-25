const express = require('express');
const app = express();
const busRoutes = require('./src/routes/busRout');
const errorHandler = require('./src/middleware/errorHandler');

app.use('/buses', busRoutes);

app.use(errorHandler);

const PORT = require('./src/config/config').PORT;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
