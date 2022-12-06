const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const comment = sequelize.define('comments', {
        id_comment : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comment : {
            type : Sequelize.STRING,
            allowNull: false,
        }


    })

    return comment;
}