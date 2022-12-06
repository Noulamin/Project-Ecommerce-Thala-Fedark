module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define('users', {
        id_user : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_Name : {
            type : Sequelize.STRING
        },
        last_Name : {
            type : Sequelize.STRING
        },
        email : {
            type : Sequelize.STRING
        },
        password : {
            type : Sequelize.STRING
        },
        phone_number : {
            type : Sequelize.STRING
        },
        city : {
            type : Sequelize.STRING
        },
        adress : {
            type : Sequelize.STRING
        },
        ValidateToken : {
            type : Sequelize.STRING
        },
        isVerified : {
            type : Sequelize.BOOLEAN,
            defaultValue : false
        },
        role : {
            type : Sequelize.ENUM('client', 'manager'),

        }
    })
    return users;
}