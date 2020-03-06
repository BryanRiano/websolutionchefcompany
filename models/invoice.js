module.exports = (sequelize, type) => {
    return sequelize.define('facturas', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        cliente: type.INTEGER,
        valor: type.DECIMAL
    })
  }