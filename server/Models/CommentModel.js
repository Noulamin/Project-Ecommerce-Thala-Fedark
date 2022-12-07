const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const comment = sequelize.define('comments', {
        id_commentaire : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        commentaire : {
            type : Sequelize.STRING,
            allowNull: false,
        }
    })

    return comment;
}