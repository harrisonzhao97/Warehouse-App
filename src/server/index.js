const express = require('express');
const path = require('path');
const controllers = require('./controllers.js');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../build')));

app.post('/warehouses', controllers.addWarehouse);

app.listen(3000);
console.log('Server listening at http://localhost:3000');