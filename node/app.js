const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
const productRoutes = require("./routes/product.routes");
app.use("/products", productRoutes);

// Sync DB
db.sequelize.sync().then(() => {
  console.log("Database synced successfully!");
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
