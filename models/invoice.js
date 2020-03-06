module.exports = (sequelize, type) => {
    return sequelize.define('facturas', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        idcliente: type.INTEGER,
        valor: type.DECIMAL,
        consumo: type.INTEGER,
        pago: type.BOOLEAN,
        fecharegistro: {type: type.DATE, defaultValue: type.NOW}
    })
  }