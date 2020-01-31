const express = require('express');
const helmet = require('helmet');

const autoRouter = require('../cars/cars-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', autoRouter);

module.exports = server;