const express = require('express');
const app = express();
const busRoutes = require('./src/routes/busRout');
const loginRout = require('./src/routes/loginRout');
const errorHandler = require('./src/middleware/errorHandler');

app.use(express.json()); 

app.use('/user', loginRout);  
app.use('/buses', busRoutes); 

app.use(errorHandler); 

const PORT = require('./src/config/config').PORT;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
