const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { CNPJRouter, UserRouter, BuyerRouter, ProviderRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/CNPJ', CNPJRouter);
app.use('/user', UserRouter);
app.use('/buyer', BuyerRouter);
app.use('/provider', ProviderRouter);

app.use(errorMiddleware);

module.exports = app;