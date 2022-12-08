const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const command = sequelize.define('commands', {
        id_command : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity : {
            type : Sequelize.INTEGER,
            allowNull: false,
        },
        montant : {
            type : Sequelize.INTEGER,
            allowNull: false,
        },
        status : {
            type : Sequelize.STRING, 
            allowNull: false,
            defaultValue : "en cours"
        },
        date_livraison : {
            type : Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
        
        // # id_prod
        // # id_user
    })

    return command;
}
