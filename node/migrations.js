const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "railway",
  "postgres",
  "sXlnlUOmroVdUsdeWpOFzKAABakesbjC",
  {
    host: "junction.proxy.rlwy.net",
    port: 35822,
    dialect: "postgres",
    logging: console.log, // Enable logging for debugging
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
})();
