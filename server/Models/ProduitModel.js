// const { sequelize, Sequelize } = require(".");
module.exports = (sequelize, Sequelize) => {
    const produit = sequelize.define('produits', {
        id_produit : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title_produit : {
            type : Sequelize.STRING
        },
        image_produit : {
            type : Sequelize.STRING
        },
        description_produit : {
            type : Sequelize.STRING
        },
        prix_produit  : {
            type : Sequelize.INTEGER
        },
        stock_produit  : {
            type : Sequelize.STRING
        },
        promotion_produit : {
            type : Sequelize.BOOLEAN
        },
        pourcentage_produit : {
            type : Sequelize.INTEGER
        }
        // #id_categorie => foreign key
    })

    return produit;
}