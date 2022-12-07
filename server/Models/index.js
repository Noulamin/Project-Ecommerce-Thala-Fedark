const dbConfig = require('../Config/configdb');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    Port : 5432,
    operatorsAliases: 0,
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
db.CodePromosModel = require('./CodePromosModel')(sequelize, Sequelize)

// Association between Command && User
db.UserModel.hasMany(db.CommandModel)
db.CommandModel.belongsTo(db.UserModel)

// Association between CodePromos && Prod
db.ProduitModel.belongsTo(db.CodePromosModel)
db.CodePromosModel.hasMany(db.ProduitModel)

// Association between Prod && Comments
db.ProduitModel.hasMany(db.CommentModel)
db.CommentModel.belongsTo(db.ProduitModel)

// Association between Prod && Avis
db.ProduitModel.hasMany(db.AvisModel)
db.AvisModel.belongsTo(db.ProduitModel)

// Association betwenn Categ and Prod
db.CategorieModel.hasMany(db.ProduitModel)
db.ProduitModel.belongsTo(db.CategorieModel)


// Association between User and Comments
db.CommentModel.belongsTo(db.UserModel);
db.UserModel.hasMany(db.CommentModel);

// Association between Prod and Command
db.ProduitModel.belongsToMany(db.CommandModel, {
  through: "Produit-command",
  foreignKey: "id_prod",
  otherKey: "id_command"
});
db.CommandModel.belongsToMany(db.ProduitModel, {
  through: "Produit-command",
  foreignKey: "id_command",
  otherKey: "id_prod"
});

module.exports = db