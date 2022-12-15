// const { sequelize, Sequelize } = require(".");
const {   ARRAY} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const produit = sequelize.define('produits', {
        id_produit: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title_produit: {
            type: Sequelize.STRING
        },
        image_produit: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false
        },
        description_produit: {
            type: Sequelize.STRING
        },
        prix_produit: {
            type: Sequelize.INTEGER
        },
        stock_produit: {
            type: Sequelize.INTEGER
        },
        promotion_produit: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        pourcentage_produit: {
            type: Sequelize.INTEGER
        }
        // #id_categorie => foreign key
    })

    return produit;
}