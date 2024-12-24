const db = require("../models");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll({ include: db.Category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const { name, price, stockQuantity, category_id } = req.body;

    if (!name || !price || !stockQuantity) {
      return res
        .status(400)
        .json({ message: "Name, price, and stock_quantity are required" });
    }

    const product = await db.Product.create({
      name,
      price,
      stock_quantity: stockQuantity,
      category_id,
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the product", error });
  }
};
