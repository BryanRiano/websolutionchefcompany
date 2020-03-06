module.exports = (sequelize, type) => {
  return sequelize.define('clientes', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: type.STRING,
      apellido: type.STRING
  })
}