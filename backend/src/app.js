const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const {
    CNPJRouter, UserRouter, BuyerRouter,
    ProviderRouter, SponsorRouter, OrderRouter,
    OrderPortionRouter, OfferRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/CNPJ', CNPJRouter);
app.use('/user', UserRouter);
app.use('/buyer', BuyerRouter);
app.use('/provider', ProviderRouter);
app.use('/sponsor', SponsorRouter);
app.use('/order', OrderRouter);
app.use('/portion-order', OrderPortionRouter);
app.use('/offer', OfferRouter);

app.use(errorMiddleware);

module.exports = app;