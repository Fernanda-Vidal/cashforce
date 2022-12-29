const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { CNPJRouter, UserRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/CNPJ', CNPJRouter);
app.use('/user', UserRouter);

app.use(errorMiddleware);

module.exports = app;