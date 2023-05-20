const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose
  .connect("mongy")
  .then(() => {
    console.log("CConnection to database!");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  console.log(createdProduct);
  const result = await createdProduct.save();

  res.json(result);
};
const getProducts = async (req, res, next) => {
  const products = Product.find().exec();
};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
