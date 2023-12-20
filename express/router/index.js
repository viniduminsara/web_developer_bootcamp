const express = require('express');
const shelterRoutes = require('./routes/shelters');
const dogsRoutes = require('./routes/dogs');

const app = express();
const port = 3000;

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogsRoutes);

app.listen(port, () => {
    console.log('Server up at port 3000');
});