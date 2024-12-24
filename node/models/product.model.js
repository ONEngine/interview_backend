module.exports = (sequelize, Sequelize) => {
  return sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    stock_quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
};
