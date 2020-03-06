const { Client, Invoice } = require('../context/context');

module.exports = function (app) {

    app.route('/api/client/create').post((req, res, next) => {
        if (req.body) {
            Client.create(req.body)
                .then(user => res.json(user))
                .catch(error => res.json(error))
        } else {
            res.status(500).send({
                'status': 'ERR',
                'text': 'Error al crear el cliente'
            });
        }
    });

    app.route('/api/client/list').get((req, res, next) => {
        Client.findAll()
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.route('/api/client/update/:id').put((req, res, next) => {
        Client.update(req.body, {
            where: {
              id: req.params.id
            }
          }).then((users) => {
            res.json(users)
          });
    })

    app.route('/api/client/delete/:id').delete((req, res, next) => {
        Client.destroy({
            where: {
              id: req.params.id
            }
          }).then((users) => {
            res.json(users)
          });
    })

    app.route('/api/client/invoices/:id').get((req, res, next) => {
      Client.findAll({ include: [
        { model: Invoice, where: { idcliente: req.params.id } }
    ]})
          .then(users => {
              res.json(users)
          })
          .catch(err => {
              res.json(err)
          })
  });
}