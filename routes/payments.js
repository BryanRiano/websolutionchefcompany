const { Payment, Invoice } = require('../context/context');

module.exports = function (app) {

    app.route('/api/payment/create').post((req, res, next) => {
        if (req.body) {
            Payment.create(req.body)
                .then(Invoice.update({pago: true}, {
                    where: {
                      id: req.body.factura
                    }
                  }).then((users) => {
                    res.json(users)
                  }))
                .catch(error => res.json(error))
        } else {
            res.status(500).send({
                'status': 'ERR',
                'text': 'Error al crear el cliente'
            });
        }
    });

    app.route('/api/payment/list').get((req, res, next) => {
        Payment.findAll()
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.route('/api/payment/invoice/:id').get((req, res, next) => {
        Payment.findAll()
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    });
}