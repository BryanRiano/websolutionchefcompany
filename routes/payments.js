module.exports = function (app) {

    app.route('/api/payment/create').post((req, res, next) => {
        if (req.body) {
            req.body.id = uniqid();
            User.create(req.body, (err, result) => {
                if (err) return next(err);
                if (result) {
                    res.status(200).send({
                        'status': 'OK',
                        'text': 'Usuario creado'
                    });
                }
            })
        } else {
            res.status(500).send({
                'status': 'ERR',
                'text': 'Error al crear el usuario'
            });
        }
    });

    app.route('/api/payment/list').get((req, res, next) => {
        User.find((err, result) => {
            if (err) return next(err);
            if (result) {
                res.status(200).send({
                    'status': 'OK',
                    'text': 'Usuarios encontrados',
                    'datos': result
                });
            } else {
                res.status(500).send({
                    'status': 'ERR',
                    'text': 'No se encontraron usuarios'
                });
            }
        })
    });
}