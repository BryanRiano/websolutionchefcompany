const Sequelize = require('sequelize');
const ClientModel = require('../models/client');
const InvoiceModel = require('../models/invoice');
const PaymentModel = require('../models/payment');
const config = require('../config/config.json');
const globals = config['database'];

const sequelize = new Sequelize(globals.database, globals.user, globals.password, {
    host: globals.host,
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

Client.hasMany(Invoice, {foreignKey: 'idcliente', as: 'invoices'});

/* sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  }); */

module.exports = {
    Client,
    Invoice,
    Payment
}

