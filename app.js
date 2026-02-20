const express = require('express');
const mongoose = require('mongoose');
const devicesRouter = require('./routes/devices')

const app = express();
const PORT = 3000; 

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tienda_moviles')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error.', err));

app.use('/api/devices', devicesRouter);

app.listen(PORT, () => {
     console.log(`Servidor en http://localhost:${PORT}`)
});

