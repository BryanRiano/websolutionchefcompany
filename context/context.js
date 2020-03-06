const Sequelize = require('sequelize');
const ClientModel = require('../models/client');
const InvoiceModel = require('../models/invoice');
const PaymentModel = require('../models/payment');

const sequelize = new Sequelize('energycompany', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Client = ClientModel(sequelize, Sequelize);
const Invoice = InvoiceModel(sequelize, Sequelize);
const Payment = PaymentModel(sequelize, Sequelize);

module.exports = {
    Client,
    Invoice,
    Payment
}

