export default function (app) {

    app.route('/api/client/create').post((req, res, next) => {
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

    app.route('/api/client/list').get((req, res, next) => {
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

    app.route('/api/client/update/:id').put((req, res, next) => {
        User.findOneAndRemove({ 'id': req.params.id }, (err, result) => {
            if (err) return next(err);
            if (result) {
                res.status(200).send({
                    'status': 'OK',
                    'text': 'Usuario Eliminado'
                });
            } else {
                res.status(500).send({
                    'status': 'ERR',
                    'text': 'Error al eliminar el usuario'
                });
            }
        })
    })

    app.route('/api/client/delete/:id').delete((req, res, next) => {
        User.findOneAndRemove({ 'id': req.params.id }, (err, result) => {
            if (err) return next(err);
            if (result) {
                res.status(200).send({
                    'status': 'OK',
                    'text': 'Usuario Eliminado'
                });
            } else {
                res.status(500).send({
                    'status': 'ERR',
                    'text': 'Error al eliminar el usuario'
                });
            }
        })
    })
}