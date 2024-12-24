const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");
console.log(dbConfig);

const sequelize = new Sequelize(dbConfig.development.url, {
  dialect: "postgres",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = require("./category.model")(sequelize, Sequelize.DataTypes);
db.Product = require("./product.model")(sequelize, Sequelize.DataTypes);
db.Customer = require("./customer.model")(sequelize, Sequelize.DataTypes);
db.Order = require("./order.model")(sequelize, Sequelize.DataTypes);

// Associations
db.Category.hasMany(db.Product, { foreignKey: "category_id" });
db.Product.belongsTo(db.Category, { foreignKey: "category_id" });

db.Customer.hasMany(db.Order, { foreignKey: "customer_id" });
db.Order.belongsTo(db.Customer, { foreignKey: "customer_id" });

module.exports = db;
