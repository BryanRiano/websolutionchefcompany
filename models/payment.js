module.exports = (sequelize, type) => {
    return sequelize.define('pagos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente: type.INTEGER,
        factura: type.INTEGER,
        valor: type.DECIMAL
    })
}