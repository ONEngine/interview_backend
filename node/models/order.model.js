module.exports = (sequelize, Sequelize) => {
  return sequelize.define("order", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    total_amount: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  });
};
