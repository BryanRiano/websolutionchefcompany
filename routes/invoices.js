const { Invoice, Client } = require('../context/context');

module.exports = function (app) {

    app.route('/api/invoice/create').post((req, res, next) => {
        if (req.body) {
            Invoice.create(req.body)
                .then(user => res.json(user))
                .catch(error => res.json(error))
        } else {
            res.status(500).send({
                'status': 'ERR',
                'text': 'Error al crear el cliente'
            });
        }
    });

    app.route('/api/invoice/list').get((req, res, next) => {
        Invoice.findAll()
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.route('/api/invoice/record').get((req, res, next) => {
        Invoice.findAll()
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.route('/api/invoice/check').get((req, res, next) => {
        Client.findAll({
            include: [
                { model: Invoice, as: 'invoices' }
            ]
        })
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.route('/api/invoice/payment/:id').get((req, res, next) => {
        Invoice.findAll({ attributes: ['valor'] })
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    });
}