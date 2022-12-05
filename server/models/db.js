const { Sequelize } = require('sequelize')
module.exports = new Sequelize('e-Commerce', 'postgres', 'test' , {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})