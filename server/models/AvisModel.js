const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const avis = sequelize.define('avis', {
        id_avis : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        avis : {
            type : Sequelize.INTEGER,
            allowNull: false,
        }

        // # id_prod => foreign key
    })

    return avis;
}