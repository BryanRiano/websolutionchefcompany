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
        fecharegistro: type.DATE
    })
  }