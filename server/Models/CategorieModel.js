const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const categorie = sequelize.define('categories', {
        id_categorie: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categorie: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    return categorie;
}