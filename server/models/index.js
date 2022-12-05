const dbConfig = require('../Config/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false
})


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.UserModel = require("./UserModel")(sequelize, Sequelize)
db.CategorieModel = require('./CategorieModel')(sequelize, Sequelize)
db.CommandModel = require('./CommandModel')(sequelize, Sequelize)
db.CommentModel = require('./CommentModel')(sequelize, Sequelize)
db.ProduitModel = require('./ProduitModel')(sequelize, Sequelize)
db.AvisModel = require('./AvisModel')(sequelize, Sequelize)

// db.UserModel.belongsTo(db.RoleModel);
// db.RoleModel.hasMany(db.UserModel);

module.exports = db