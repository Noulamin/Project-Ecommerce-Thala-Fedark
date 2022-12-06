const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const produit = sequelize.define('produits', {
        id_produit : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type : Sequelize.STRING
        },
        image : {
            type : Sequelize.STRING
        },
        description : {
            type : Sequelize.STRING
        },
        prix : {
            type : Sequelize.STRING
        },
        stock : {
            type : Sequelize.STRING
        },
        promotion : {
            type : Sequelize.STRING
        }

        // #id_categorie => foreign key
    })

    return produit;
}