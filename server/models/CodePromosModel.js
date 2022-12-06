const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const codePromos = sequelize.define('codePromos', {
        id_promos : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        promotion : {
            type : Sequelize.STRING,
            allowNull: false,
        },
        date_expiration : {
            type : Sequelize.DATE,
            allowNull: false,
        }


    })

    return codePromos;
}